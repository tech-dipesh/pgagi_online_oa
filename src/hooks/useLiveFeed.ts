"use client"

import { useEffect } from "react"
import { useAppDispatch } from "@/lib/store/hooks"
import { receiveLiveItem, setConnected } from "@/lib/store/liveFeedSlice"
import type { FeedItem } from "@/lib/mock-data/types"

export function useLiveFeed() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const source = new EventSource("/api/live-feed")

    source.onopen = () => dispatch(setConnected(true))
    source.onerror = () => dispatch(setConnected(false))
    source.onmessage = (event) => {
      const item = JSON.parse(event.data) as FeedItem
      dispatch(receiveLiveItem(item))
    }

    return () => {
      source.close()
      dispatch(setConnected(false))
    }
  }, [dispatch])
}
