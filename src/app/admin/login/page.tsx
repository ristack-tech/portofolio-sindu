'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase-browser'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Email atau password salah.')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white border-[4px] border-black shadow-[8px_8px_0_0_#000] p-10">
          <div className="mb-8">
            <span className="font-display text-3xl font-extrabold">SA.</span>
            <h1 className="font-display text-2xl font-extrabold mt-2">ADMIN LOGIN</h1>
            <p className="font-mono text-xs text-[#727785] mt-1">Portfolio Management Panel</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#f9f9f9] border-[2px] border-black p-4 font-body text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#f9f9f9] border-[2px] border-black p-4 font-body text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-[#ffdad6] border-[2px] border-[#ba1a1a] p-4">
                <p className="font-mono text-xs font-bold text-[#93000a]">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0058be] text-white py-4 font-mono text-sm font-bold border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[6px_6px_0_0_#000]"
            >
              {loading ? 'MASUK...' : 'MASUK'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
