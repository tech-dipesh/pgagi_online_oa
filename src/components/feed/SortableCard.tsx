"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { FeedItem } from "@/lib/mock-data/types"
import { ContentCard } from "./ContentCard"

export function SortableCard({ item }: { item: FeedItem }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style}>
      <ContentCard item={item} dragHandleProps={{ ...attributes, ...listeners }} />
    </div>
  )
}
