import { describe, expect, it } from "vitest"
import feedReducer, { setSearchTerm, showMore } from "../feedSlice"

describe("feedSlice", () => {
  it("resets visible count when a new search term is entered", () => {
    const withMore = feedReducer(
      { order: ["a", "b"], searchTerm: "", visibleCount: 6 },
      showMore(),
    )
    expect(withMore.visibleCount).toBe(12)

    const afterSearch = feedReducer(withMore, setSearchTerm("mario"))
    expect(afterSearch.searchTerm).toBe("mario")
    expect(afterSearch.visibleCount).toBe(6)
  })
})
