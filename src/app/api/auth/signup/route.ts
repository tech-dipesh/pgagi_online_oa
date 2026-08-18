import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import {z} from "zod"
import { prisma } from "@/lib/prisma"
import { signupSchema } from "@/lib/validation/auth"

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = signupSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: z.treeifyError(parsed.error) }, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email: parsed.data.email } })
  if (existingUser) {
    return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 10)

  const user = await prisma.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash,
      avatarSeed: parsed.data.email,
    },
  })

  return NextResponse.json({ id: user.id, name: user.name, email: user.email }, { status: 201 })
}
