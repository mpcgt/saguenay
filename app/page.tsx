'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {session ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bienvenue {session.user?.name}</h1>
          <p>Vous êtes connecté avec : {session.user?.email}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Veuillez vous connecter</h1>
          <div className="space-x-4">
            <Link 
              href="/login" 
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Connexion
            </Link>
            <Link 
              href="/register" 
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Inscription
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}