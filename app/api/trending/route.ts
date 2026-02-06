import { NextRequest, NextResponse } from "next/server"

function getDateSince(range: string): string {
  const now = new Date()
  switch (range) {
    case "weekly":
      now.setDate(now.getDate() - 7)
      break
    case "monthly":
      now.setMonth(now.getMonth() - 1)
      break
    default:
      now.setDate(now.getDate() - 1)
      break
  }
  return now.toISOString().split("T")[0]
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const range = searchParams.get("range") || "daily"
  const language = searchParams.get("language") || ""
  const page = searchParams.get("page") || "1"

  const dateSince = getDateSince(range)

  let query = `created:>${dateSince}`
  if (language) {
    query += ` language:${language}`
  }

  const sortMap: Record<string, string> = {
    daily: "stars",
    weekly: "stars",
    monthly: "stars",
  }

  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=${sortMap[range] || "stars"}&order=desc&per_page=25&page=${page}`

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "GitTrends-App",
      },
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}))
      return NextResponse.json(
        {
          error: "GitHub API error",
          message: errorData.message || "Failed to fetch data",
          status: res.status,
        },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
