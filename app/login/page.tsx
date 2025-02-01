'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    if (response?.error) {
      setError(response.error)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>
        
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  )
} 