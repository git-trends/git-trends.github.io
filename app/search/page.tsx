import { SearchContent } from "@/components/search-content"
import { Search } from "lucide-react"

export const metadata = {
  title: "Search Repositories - GitTrends",
  description: "Search across millions of GitHub repositories by name, topic, or language.",
}

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Search className="h-5 w-5 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Search Repositories
          </h1>
        </div>
        <p className="text-muted-foreground">
          Search across millions of GitHub repositories by name, topic, or language.
        </p>
      </div>
      <SearchContent />
    </div>
  )
}
