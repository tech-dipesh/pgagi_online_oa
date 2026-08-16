"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ExternalLink, Play } from "lucide-react"
import type { FeedItem } from "@/lib/mock-data/types"
import { categoryLabel, categoryOf, categoryVar } from "@/lib/content-style"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { toggleFavorite } from "@/lib/store/favoritesSlice"

function formatTimestamp(isoDate: string): string {
  return new Date(isoDate).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

function CardHeadline({ item }: { item: FeedItem }) {
  if (item.kind === "news") {
    return (
      <div>
        <p className="text-sm text-ink-muted">
          
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
          {item.headline}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{item.summary}</p>
        
      </div>
    )
  }

  if (item.kind === "movie") {
    return (
      <div>
        <h3 className="text-ink-muted text-lg font-semibold leading-snug">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-ink-muted">{item.tagline}</p>
        <p className="mt-2 font-mono text-xs text-ink-muted">
          {item.releaseYear} · {item.genres.join(", ")} · {item.rating.toFixed(1)} rating
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-sm font-medium">{item.displayName} <span className="text-ink-muted">{item.handle}</span></p>
      <p className="mt-1 text-sm leading-relaxed">{item.body}</p>
      <p className="mt-2 font-mono text-xs text-ink-muted">
        {item.likeCount.toLocaleString()} likes · {item.repostCount.toLocaleString()} reposts
      </p>
    </div>
  )
}

function CardAction({ item }: { item: FeedItem }) {
  if (item.kind === "news") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium"
        style={{ color: categoryVar(categoryOf(item)) }}
      >
        Read more <ExternalLink size={14} />
      </a>
    )
  }

  if (item.kind === "movie") {
    return (
      <span
        className="inline-flex items-center gap-1 text-sm font-medium"
        style={{ color: categoryVar(categoryOf(item)) }}
      >
        <Play size={14} /> Play trailer
      </span>
    )
  }

  return null
}

type ContentCardProps = {
  item: FeedItem
  dragHandleProps?: React.HTMLAttributes<HTMLButtonElement>
}

export function ContentCard({ item, dragHandleProps }: ContentCardProps) {
  const dispatch = useAppDispatch()
  const isFavorite = useAppSelector((state) => state.favorites.itemIds.includes(item.id))
  const category = categoryOf(item)
  const timestamp = item.kind === "news" ? item.publishedAt : item.kind === "social" ? item.postedAt : null
  const imageUrl = item.kind === "news" ? item.imageUrl : item.kind === "movie" ? item.posterUrl : item.avatarUrl

  return (
    <motion.article
      layout
      whileHover={{ y: -2 }}
      className="flex gap-4 overflow-hidden rounded-xl border border-line)] bg-surface p-4 shadow-sm"
      style={{ borderLeftWidth: 4, borderLeftColor: categoryVar(category) }}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image src={imageUrl} alt="" fill sizes="80px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <span
            className="font-mono text-xs uppercase tracking-wide"
            style={{ color: categoryVar(category) }}
          >
            {categoryLabel(category)}
          </span>
          <div className="flex items-center gap-2">
            {timestamp && (
              <span className="font-mono text-xs text-ink-muted">
                {formatTimestamp(timestamp)}
              </span>
            )}
            <button
              type="button"
              onClick={() => dispatch(toggleFavorite(item.id))}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className="text-ink-muted hover:text-finance"
            >
              <Star size={16} fill={isFavorite ? "currentColor" : "none"} color={isFavorite ? "var(--color-finance)" : "currentColor"} />
            </button>
            {dragHandleProps && (
              <button
                type="button"
                aria-label="Drag to reorder"
                className="cursor-grab text-ink-muted active:cursor-grabbing"
                {...dragHandleProps}
              >
                ⠿
              </button>
            )}
          </div>
        </div>
        <div className="mt-2">
          <CardHeadline item={item} />
        </div>
        <div className="mt-3">
          <CardAction item={item} />
        </div>
      </div>
    </motion.article>
  )
}
