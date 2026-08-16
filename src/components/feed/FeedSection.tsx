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
export function FeedSection() {
  const allItems = useMemo(() => buildFeed(), [])
  const itemsById = useMemo(() => new Map(allItems.map((item) => [item.id, item])), [allItems])


  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
    </DndContext>
  )
}
