import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { FeedItem } from "@/lib/mock-data/types"

type LiveFeedState = {
  items: FeedItem[]
  connected: boolean
}

const initialState: LiveFeedState = {
  items: [],
  connected: false,
}

const liveFeedSlice = createSlice({
  name: "liveFeed",
  initialState,
  reducers: {
    receiveLiveItem(state, action: PayloadAction<FeedItem>) {
      state.items.unshift(action.payload)
      if (state.items.length > 20) state.items.pop()
    },
    setConnected(state, action: PayloadAction<boolean>) {
      state.connected = action.payload
    },
  },
})

export const { receiveLiveItem, setConnected } = liveFeedSlice.actions
export default liveFeedSlice.reducer
