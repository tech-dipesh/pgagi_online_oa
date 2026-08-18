"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"

export function ProfilePanel() {
  const { data: session, update } = useSession()
  const [name, setName] = useState(session?.user?.name ?? "")
  const [bio, setBio] = useState("")
  const [avatarSeed, setAvatarSeed] = useState(session?.user?.email ?? "")
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()
    setStatus("saving")

    const response = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, bio, avatarSeed }),
    })

    if (!response.ok) {
      setStatus("error")
      return
    }

    await update({ name })
    setStatus("saved")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md rounded-xl border border-line bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">Your profile</h2>
      <p className="mt-1 text-sm text-ink-muted">Signed in as {session?.user?.email}</p>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="profile-name" className="text-sm font-medium">Display name</label>
          <input
            id="profile-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength={2}
            className="rounded-lg border border-line bg-canvas px-3 py-2 text-sm outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="profile-bio" className="text-sm font-medium">Bio</label>
          <textarea
            id="profile-bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            maxLength={280}
            rows={3}
            className="rounded-lg border border-line bg-canvas px-3 py-2 text-sm outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="profile-avatar-seed" className="text-sm font-medium">Avatar style</label>
          <input
            id="profile-avatar-seed"
            value={avatarSeed}
            onChange={(event) => setAvatarSeed(event.target.value)}
            placeholder="Any word changes your avatar image"
            className="rounded-lg border border-line bg-canvas px-3 py-2 text-sm outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "saving"}
          className="self-start rounded-lg bg-tech px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {status === "saving" ? "Saving..." : "Save profile"}
        </button>
        {status === "saved" && <p className="text-sm text-sports">Profile updated</p>}
        {status === "error" && <p className="text-sm text-red-600">Could not save your profile</p>}
      </div>
    </form>
  )
}
