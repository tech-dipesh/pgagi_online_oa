import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type FavoritesState = {
  itemIds: string[]
}

const initialState: FavoritesState = {
  itemIds: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload
      if (state.itemIds.includes(id)) {
        state.itemIds = state.itemIds.filter((entry) => entry !== id)
      } else {
        state.itemIds.push(id)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
