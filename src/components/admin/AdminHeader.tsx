import { createSupabaseServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function AdminHeader() {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  async function signOut() {
    'use server'
    const sb = await createSupabaseServerClient()
    await sb.auth.signOut()
    redirect('/admin/login')
  }

  return (
    <header className="h-16 bg-[#f9f9f9] border-b-[4px] border-black flex items-center justify-between px-8">
      <span className="font-mono text-xs font-bold tracking-widest text-[#727785]">
        ADMIN PANEL — SA.
      </span>
      <div className="flex items-center gap-6">
        <span className="font-mono text-xs text-[#727785]">{user?.email}</span>
        <form action={signOut}>
          <button
            type="submit"
            className="font-mono text-xs font-bold bg-black text-white px-4 py-2 border-[2px] border-black hover:bg-[#0058be] transition-colors"
          >
            LOGOUT
          </button>
        </form>
      </div>
    </header>
  )
}
