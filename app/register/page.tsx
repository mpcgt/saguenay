'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState<string>('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name'),
      }),
    })

    if (response.ok) {
      router.push('/login')
    } else {
      const data = await response.json()
      setError(data.error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={onSubmit} className="space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Inscription</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Mot de passe
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          {"S'inscrire"}
        </button>
      </form>
    </main>
  )
}