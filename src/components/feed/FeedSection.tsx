"use client"

import { useCallback, useMemo } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { AnimatePresence, motion } from "framer-motion"
import { buildFeed } from "@/lib/mock-data"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { reorder, showMore } from "@/lib/store/feedSlice"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import { ContentCard } from "./ContentCard"
import { SortableCard } from "./SortableCard"

export function FeedSection() {
  const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.feed.order)
  const searchTerm = useAppSelector((state) => state.feed.searchTerm)
  const visibleCount = useAppSelector((state) => state.feed.visibleCount)
  const favoriteCategories = useAppSelector((state) => state.preferences.favoriteCategories)
  const liveItems = useAppSelector((state) => state.liveFeed.items)

  const allItems = useMemo(() => buildFeed(), [])
  const itemsById = useMemo(() => new Map(allItems.map((item) => [item.id, item])), [allItems])

  const orderedItems = useMemo(
    () => order.map((id) => itemsById.get(id)).filter((item) => item !== undefined),
    [order, itemsById],
  )

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return orderedItems.filter((item) => {
      const categoryMatch =
        item.kind === "movie" ||
        item.kind === "social" ||
        favoriteCategories.includes(item.category)
      if (!categoryMatch) return false
      if (!term) return true
      const haystack =
        item.kind === "news"
          ? `${item.headline} ${item.summary}`
          : item.kind === "movie"
            ? `${item.title} ${item.tagline}`
            : `${item.body} ${item.handle}`
      return haystack.toLowerCase().includes(term)
    })
  }, [orderedItems, searchTerm, favoriteCategories])

  const visibleItems = filteredItems.slice(0, visibleCount)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (!over || active.id === over.id) return
      const oldIndex = order.indexOf(String(active.id))
      const newIndex = order.indexOf(String(over.id))
      dispatch(reorder(arrayMove(order, oldIndex, newIndex)))
    },
    [order, dispatch],
  )

  const sentinelRef = useInfiniteScroll(
    useCallback(() => {
      if (visibleCount < filteredItems.length) dispatch(showMore())
    }, [visibleCount, filteredItems.length, dispatch]),
  )

  return (
    <div className="flex flex-col gap-4">
      {liveItems.length > 0 && (
        <div className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {liveItems.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
              >
                <ContentCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {filteredItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-line p-10 text-center text-ink-muted">
          Nothing matches your search and category settings right now. Try adjusting your preferences.
        </div>
      ) : (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={visibleItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-4">
              <AnimatePresence initial={false}>
                {visibleItems.map((item) => (
                  <motion.div key={item.id} exit={{ opacity: 0, height: 0 }}>
                    <SortableCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </SortableContext>
          <div ref={sentinelRef} className="h-8" />
        </DndContext>
      )}
    </div>
  )
}
