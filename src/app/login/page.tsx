import Link from "next/link"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-sm rounded-xl border border-line bg-surface p-6">
        <h1 className="font-display text-xl font-semibold">Sign in to Signal</h1>
        <p className="mt-1 text-sm text-ink-muted">Your personalized content dashboard</p>
        <div className="mt-5">
          <LoginForm />
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Don&apos;t have an account? <Link href="/signup" className="font-medium text-tech">Create one</Link>
        </p>
      </div>
    </div>
  )
}
