"use client"

import { useMemo } from "react"
import { buildFeed } from "@/lib/mock-data"
import { useAppSelector } from "@/lib/store/hooks"
import { ContentCard } from "./ContentCard"

export function FavoritesSection() {
  const favoriteIds = useAppSelector((state) => state.favorites.itemIds)
  const allItems = useMemo(() => buildFeed(), [])
  const favoriteItems = allItems.filter((item) => favoriteIds.includes(item.id))

  if (favoriteItems.length === 0) {
    return (
      <div className="rounded-xl border border-dashed bg-surface)] p-10 text-center text-ink-muted">
        You have not starred anything yet. Tap the star on a card to save it here.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {favoriteItems.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  )
}
