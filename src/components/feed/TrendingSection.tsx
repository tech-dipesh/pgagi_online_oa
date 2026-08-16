"use client"

import { useMemo } from "react"
import { buildFeed } from "@/lib/mock-data"
import { ContentCard } from "./ContentCard"

function trendingScore(item: ReturnType<typeof buildFeed>[number]): number {
  if (item.kind === "social") return item.likeCount + item.repostCount * 2
  if (item.kind === "movie") return item.rating * 200
  return 100
}

export function TrendingSection() {
  const trendingItems = useMemo(() => {
    return [...buildFeed()].sort((a, b) => trendingScore(b) - trendingScore(a)).slice(0, 6)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      {trendingItems.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  )
}
