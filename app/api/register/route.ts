import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()
    
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: 'Cet email est déjà utilisé' }),
        { status: 400 }
      )
    }
    
    const hashedPassword = await hash(password, 10)
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
      }
    })

    return NextResponse.json({
      user: {
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      )
    }
    return new NextResponse(
      JSON.stringify({ error: 'Une erreur inattendue est survenue' }),
      { status: 500 }
    )
  }
} 