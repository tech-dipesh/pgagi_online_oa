import { describe, expect, it } from "vitest"
import preferencesReducer, { toggleCategory, setDarkMode, setLanguage } from "../preferencesSlice"

describe("preferencesSlice", () => {
  it("removes a category the first time it is toggled off", () => {
    const initialState = {
      favoriteCategories: ["technology", "sports"] as const,
      darkMode: false,
      language: "en" as const,
    }
    const state = preferencesReducer(
      { ...initialState, favoriteCategories: [...initialState.favoriteCategories] },
      toggleCategory("technology"),
    )
    expect(state.favoriteCategories).toEqual(["sports"])
  })

  it("adds a category back when toggled again", () => {
    const state = preferencesReducer(
      { favoriteCategories: ["sports"], darkMode: false, language: "en" },
      toggleCategory("technology"),
    )
    expect(state.favoriteCategories).toContain("technology")
  })

  it("sets dark mode directly", () => {
    const state = preferencesReducer(
      { favoriteCategories: [], darkMode: false, language: "en" },
      setDarkMode(true),
    )
    expect(state.darkMode).toBe(true)
  })

  it("changes the language preference", () => {
    const state = preferencesReducer(
      { favoriteCategories: [], darkMode: false, language: "en" },
      setLanguage("hi"),
    )
    expect(state.language).toBe("hi")
  })
})
