"use client"

import { useState } from "react"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"

export function ProfileMenu() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)

  if (!session?.user) return null

  const initials = session.user.name
    ? session.user.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
    : "?"

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-tech font-mono text-xs font-medium text-white cursor-pointer"
      >
        {session.user.image ? (
          <Image src={session.user.image} alt="" width={36} height={36} className="h-full w-full object-cover" />
        ) : (
          initials
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-11 z-10 w-48 rounded-lg border border-line bg-surface p-2 shadow-md">
          <p className="truncate px-2 py-1 text-sm font-medium">{session.user.name}</p>
          <p className="truncate px-2 pb-2 text-xs text-ink-muted">{session.user.email}</p>
          <button
            type="button"
            onClick={() => signOut()}
            className="w-full rounded-md px-2 py-1.5 text-left text-sm text-ink-muted hover:bg-canvas"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
