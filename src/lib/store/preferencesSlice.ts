import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ContentCategory } from "@/lib/mock-data/types"

type PreferencesState = {
  favoriteCategories: ContentCategory[]
  darkMode: boolean
}

const initialState: PreferencesState = {
  favoriteCategories: ["technology", "sports", "finance", "entertainment", "social"],
  darkMode: false,
}

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleCategory(state, action: PayloadAction<ContentCategory>) {
      const category = action.payload
      if (state.favoriteCategories.includes(category)) {
        state.favoriteCategories = state.favoriteCategories.filter((entry) => entry !== category)
      } else {
        state.favoriteCategories.push(category)
      }
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload
    },
  },
})

export const { toggleCategory, setDarkMode } = preferencesSlice.actions
export default preferencesSlice.reducer
