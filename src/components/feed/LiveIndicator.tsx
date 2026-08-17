"use client"

import { useAppSelector } from "@/lib/store/hooks"

export function LiveIndicator() {
  const connected = useAppSelector((state) => state.liveFeed.connected)

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
      <span
        className={`h-1.5 w-1.5 rounded-full ${connected ? "bg-sports" : "bg-ink-muted"}`}
      />
      {connected ? "Live" : "Connecting"}
    </span>
  )
}
