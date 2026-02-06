import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q") || ""
  const language = searchParams.get("language") || ""
  const sort = searchParams.get("sort") || "stars"
  const page = searchParams.get("page") || "1"

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter 'q' is required" },
      { status: 400 }
    )
  }

  let fullQuery = query
  if (language) {
    fullQuery += ` language:${language}`
  }

  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(fullQuery)}&sort=${sort}&order=desc&per_page=25&page=${page}`

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "GitTrends-App",
      },
      next: { revalidate: 60 },
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
