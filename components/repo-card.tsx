import { Star, GitFork, Eye, ExternalLink } from "lucide-react"
import { LANGUAGE_COLORS } from "@/lib/languages"

interface Repo {
  id: number
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string | null
  owner: {
    login: string
    avatar_url: string
  }
  topics?: string[]
}

function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`
  }
  return num.toString()
}

export function RepoCard({ repo, rank }: { repo: Repo; rank: number }) {
  const langColor = repo.language
    ? LANGUAGE_COLORS[repo.language] || "#8b8b8b"
    : null

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-secondary"
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-secondary font-mono text-sm text-muted-foreground">
        {rank}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <img
                src={repo.owner.avatar_url || "/placeholder.svg"}
                alt={`${repo.owner.login}'s avatar`}
                className="h-5 w-5 rounded-full"
                width={20}
                height={20}
              />
              <h3 className="truncate font-mono text-sm font-semibold text-primary group-hover:underline">
                {repo.full_name}
              </h3>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {repo.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {repo.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {langColor && repo.language && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: langColor }}
              />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5" />
            {formatNumber(repo.stargazers_count)}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <GitFork className="h-3.5 w-3.5" />
            {formatNumber(repo.forks_count)}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Eye className="h-3.5 w-3.5" />
            {formatNumber(repo.watchers_count)}
          </span>
        </div>

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 5).map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}

export function RepoCardSkeleton() {
  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
      <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-md bg-secondary" />
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-5 w-48 animate-pulse rounded bg-secondary" />
        <div className="h-4 w-full animate-pulse rounded bg-secondary" />
        <div className="flex gap-3">
          <div className="h-4 w-16 animate-pulse rounded bg-secondary" />
          <div className="h-4 w-12 animate-pulse rounded bg-secondary" />
          <div className="h-4 w-12 animate-pulse rounded bg-secondary" />
        </div>
      </div>
    </div>
  )
}
