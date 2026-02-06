import { TrendingList } from "@/components/trending-list"
import { TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Trending Repositories
          </h1>
        </div>
        <p className="text-muted-foreground">
          Discover the most popular open-source projects on GitHub right now.
        </p>
      </div>
      <TrendingList />
    </div>
  )
}
