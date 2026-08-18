import { describe, expect, it } from "vitest"
import { loginSchema, signupSchema, profileUpdateSchema } from "../auth"

describe("loginSchema", () => {
  it("accepts a valid email and password", () => {
    const result = loginSchema.safeParse({ email: "dipesh@example.com", password: "correcthorse" })
    expect(result.success).toBe(true)
  })

  it("rejects a password shorter than 8 characters", () => {
    const result = loginSchema.safeParse({ email: "dipesh@example.com", password: "short" })
    expect(result.success).toBe(false)
  })

  it("rejects a malformed email", () => {
    const result = loginSchema.safeParse({ email: "not-an-email", password: "correcthorse" })
    expect(result.success).toBe(false)
  })
})

describe("signupSchema", () => {
  it("rejects a name that is only one character", () => {
    const result = signupSchema.safeParse({ name: "D", email: "dipesh@example.com", password: "correcthorse" })
    expect(result.success).toBe(false)
  })

  it("accepts a full valid payload", () => {
    const result = signupSchema.safeParse({ name: "Dipesh", email: "dipesh@example.com", password: "correcthorse" })
    expect(result.success).toBe(true)
  })
})

describe("profileUpdateSchema", () => {
  it("rejects a bio longer than 280 characters", () => {
    const result = profileUpdateSchema.safeParse({
      name: "Dipesh",
      bio: "a".repeat(281),
      avatarSeed: "dipesh",
    })
    expect(result.success).toBe(false)
  })

  it("accepts a valid profile update", () => {
    const result = profileUpdateSchema.safeParse({
      name: "Dipesh",
      bio: "Building things",
      avatarSeed: "dipesh",
    })
    expect(result.success).toBe(true)
  })
})
