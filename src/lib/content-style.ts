import type { ContentCategory, FeedItem } from "./mock-data/types"

export function categoryOf(item: FeedItem): ContentCategory {
  if (item.kind === "news") return item.category
  if (item.kind === "movie") return "entertainment"
  return "social"
}

export function categoryLabel(category: ContentCategory): string {
  switch (category) {
    case "technology":
      return "Technology"
    case "sports":
      return "Sports"
    case "finance":
      return "Finance"
    case "entertainment":
      return "Entertainment"
    case "social":
      return "Social"
  }
}

export function categoryVar(category: ContentCategory): string {
  switch (category) {
    case "technology":
      return "var(--color-tech)"
    case "sports":
      return "var(--color-sports)"
    case "finance":
      return "var(--color-finance)"
    case "entertainment":
      return "var(--color-entertainment)"
    case "social":
      return "var(--color-social)"
  }
}
