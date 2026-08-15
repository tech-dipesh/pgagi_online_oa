export type ContentCategory =
  | "technology"
  | "sports"
  | "finance"
  | "entertainment"
  | "social"

export type NewsArticle = {
  kind: "news"
  id: string
  category: ContentCategory
  source: string
  headline: string
  summary: string
  imageUrl: string
  publishedAt: string
  url: string
}

export type MovieRecommendation = {
  kind: "movie"
  id: string
  title: string
  tagline: string
  posterUrl: string
  releaseYear: number
  rating: number
  genres: string[]
}

export type SocialPost = {
  kind: "social"
  id: string
  handle: string
  displayName: string
  avatarUrl: string
  body: string
  postedAt: string
  likeCount: number
  repostCount: number
  hashtags: string[]
}

export type FeedItem = NewsArticle | MovieRecommendation | SocialPost
