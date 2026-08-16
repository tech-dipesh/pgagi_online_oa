import { useEffect, useRef } from "react"

export function useInfiniteScroll(onReachEnd: () => void) {
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting) {
        onReachEnd()
      }
    })

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [onReachEnd])

  return sentinelRef
}
