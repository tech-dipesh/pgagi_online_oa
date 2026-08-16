import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { describe, expect, it } from "vitest"
import { configureStore } from "@reduxjs/toolkit"
import preferencesReducer from "@/lib/store/preferencesSlice"
import favoritesReducer from "@/lib/store/favoritesSlice"
import feedReducer from "@/lib/store/feedSlice"
import { ContentCard } from "../ContentCard"
import type { NewsArticle } from "@/lib/mock-data/types"

const sampleArticle: NewsArticle = {
  kind: "news",
  id: "test-article",
  category: "technology",
  source: "Test Source",
  headline: "A headline for testing",
  summary: "A short summary used in the test",
  imageUrl: "https://picsum.photos/seed/test/200/200",
  publishedAt: "2026-08-14T00:00:00Z",
  url: "https://example.com",
}

function renderWithStore(children: React.ReactNode) {
  const store = configureStore({
    reducer: {
      preferences: preferencesReducer,
      favorites: favoritesReducer,
      feed: feedReducer,
    },
  })
  return render(<Provider store={store}>{children}</Provider>)
}

describe("ContentCard", () => {
  it("renders the headline and source for a news item", () => {
    renderWithStore(<ContentCard item={sampleArticle} />)
    expect(screen.getByText("A headline for testing")).toBeInTheDocument()
    expect(screen.getByText("Test Source")).toBeInTheDocument()
  })
})
