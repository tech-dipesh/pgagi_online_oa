import { describe, expect, it } from "vitest"
import preferencesReducer, { toggleCategory, setDarkMode } from "../preferencesSlice"

describe("preferencesSlice", () => {
  it("removes a category the first time it is toggled off", () => {
    const initialState = {
      favoriteCategories: ["technology", "sports"] as const,
      darkMode: false,
    }
    const state = preferencesReducer(
      { ...initialState, favoriteCategories: [...initialState.favoriteCategories] },
      toggleCategory("technology"),
    )
    expect(state.favoriteCategories).toEqual(["sports"])
  })

  it("adds a category back when toggled again", () => {
    const state = preferencesReducer(
      { favoriteCategories: ["sports"], darkMode: false },
      toggleCategory("technology"),
    )
    expect(state.favoriteCategories).toContain("technology")
  })

  it("sets dark mode directly", () => {
    const state = preferencesReducer(
      { favoriteCategories: [], darkMode: false },
      setDarkMode(true),
    )
    expect(state.darkMode).toBe(true)
  })
})
