import { Info, TrendingUp, Search, Globe, Zap } from "lucide-react"

export const metadata = {
  title: "About - GitTrends",
  description:
    "GitTrends helps developers discover trending open-source projects on GitHub.",
}

const features = [
  {
    icon: TrendingUp,
    title: "Trending Discovery",
    description:
      "Browse the hottest repositories across daily, weekly, and monthly timeframes to stay on top of what the community is building.",
  },
  {
    icon: Search,
    title: "Powerful Search",
    description:
      "Search across millions of GitHub repositories with advanced filters for language, sort order, and more.",
  },
  {
    icon: Globe,
    title: "Language Filtering",
    description:
      "Filter trending and search results by programming language to find projects in your tech stack.",
  },
  {
    icon: Zap,
    title: "Real-Time Data",
    description:
      "All data is fetched directly from the GitHub API, ensuring you always see the latest trending projects.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Info className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            About GitTrends
          </h1>
        </div>
        <p className="text-muted-foreground">
          Discover what the developer community is building.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            GitTrends is a free, open-source tool that helps developers discover
            trending repositories on GitHub. Whether you are looking for
            inspiration, staying up to date with the latest tools, or exploring
            new programming languages, GitTrends makes it easy to find what is
            popular in the open-source world.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-foreground">
            How It Works
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            GitTrends uses the public GitHub Search API to find repositories
            created or updated within specific time ranges, sorted by
            popularity. The daily view shows repos created in the last 24 hours,
            weekly covers the past 7 days, and monthly spans the last 30 days.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-foreground">Disclaimer</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            GitTrends is not affiliated with, endorsed by, or sponsored by
            GitHub, Inc. All repository data is publicly available through the
            GitHub API. GitHub and the GitHub logo are trademarks of GitHub, Inc.
          </p>
        </section>
      </div>
    </div>
  )
}
