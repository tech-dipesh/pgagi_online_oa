import { newsArticles } from "./news"
import { movieRecommendations } from "./movies"
import { socialPosts } from "./social"
import type { FeedItem } from "./types"

export * from "./types"
export { newsArticles } from "./news"
export { movieRecommendations } from "./movies"
export { socialPosts } from "./social"

export function buildFeed(): FeedItem[] {
  return [...newsArticles, ...movieRecommendations, ...socialPosts]
}
