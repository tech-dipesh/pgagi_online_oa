import { liveUpdatePool } from "@/lib/mock-data/live-updates"
import type { FeedItem } from "@/lib/mock-data/types"

export const dynamic = "force-dynamic"

function withFreshTimestamp(item: FeedItem): FeedItem {
  const id = `${item.id}-${Date.now()}`
  const now = new Date().toISOString()

  if (item.kind === "news") return { ...item, id, publishedAt: now }
  if (item.kind === "social") return { ...item, id, postedAt: now }
  return { ...item, id }
}

export async function GET() {
  const encoder = new TextEncoder()
  let closed = false

  const stream = new ReadableStream({
    start(controller) {
      const sendItem = () => {
        if (closed) return
        const template = liveUpdatePool[Math.floor(Math.random() * liveUpdatePool.length)]
        if (!template) return
        const item = withFreshTimestamp(template)
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(item)}\n\n`))
      }

      const interval = setInterval(sendItem, 15000)
      sendItem()

      const close = () => {
        closed = true
        clearInterval(interval)
        controller.close()
      }

      return close
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
