import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const signupSchema = z.object({
  name: z.string().trim().min(2).max(60),
  email: z.string().email(),
  password: z.string().min(8).max(72),
})

export const profileUpdateSchema = z.object({
  name: z.string().trim().min(2).max(60),
  bio: z.string().trim().max(280),
  avatarSeed: z.string().trim().min(1).max(60),
})

export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>
