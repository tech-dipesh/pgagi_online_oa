import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { buildFeed } from "@/lib/mock-data"

type FeedState = {
  order: string[]
  searchTerm: string
  visibleCount: number
}

const initialState: FeedState = {
  order: buildFeed().map((item) => item.id),
  searchTerm: "",
  visibleCount: 6,
}

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    reorder(state, action: PayloadAction<string[]>) {
      state.order = action.payload
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
      state.visibleCount = 6
    },
    showMore(state) {
      state.visibleCount += 6
    },
  },
})

export const { reorder, setSearchTerm, showMore } = feedSlice.actions
export default feedSlice.reducer
