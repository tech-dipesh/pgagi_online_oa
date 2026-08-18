import Link from "next/link"
import { SignupForm } from "@/components/auth/SignupForm"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-sm rounded-xl border border-line bg-surface p-6">
        <h1 className="font-display text-xl font-semibold">Create your account</h1>
        <p className="mt-1 text-sm text-ink-muted">Set up your Signal dashboard</p>
        <div className="mt-5">
          <SignupForm />
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Already have an account? <Link href="/login" className="font-medium text-tech">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
