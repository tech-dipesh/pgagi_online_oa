import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { profileUpdateSchema } from "@/lib/validation/auth"

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 })
  }

  const body = await request.json()
  const parsed = profileUpdateSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: parsed.data.name,
      bio: parsed.data.bio,
      avatarSeed: parsed.data.avatarSeed,
    },
  })

  return NextResponse.json({ id: user.id, name: user.name, bio: user.bio, avatarSeed: user.avatarSeed })
}
