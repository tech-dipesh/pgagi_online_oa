"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export function SignupForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })

    if (!response.ok) {
      const payload = await response.json()
      setError(typeof payload.error === "string" ? payload.error : "Could not create your account")
      setSubmitting(false)
      return
    }

    const result = await signIn("credentials", { email, password, redirect: false })
    setSubmitting(false)

    if (result?.error) {
      setError("Account created, but sign in failed. Try signing in manually.")
      return
    }

    router.push("/")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          minLength={2}
          className="rounded-lg border border-line bg-canvas px-3 py-2 text-sm outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="signup-email" className="text-sm font-medium">Email</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="rounded-lg border border-line bg-canvas px-3 py-2 text-sm outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
          className="rounded-lg border border-line bg-canvas px-3 py-2 text-sm outline-none"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 rounded-lg bg-tech px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        {submitting ? "Creating account..." : "Create account"}
      </button>
    </form>
  )
}
