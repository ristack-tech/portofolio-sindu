import { adminGetAllProjects, adminGetMessages, triggerVercelDeploy } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function AdminDashboardPage() {
  const [projects, messages] = await Promise.all([
    adminGetAllProjects().catch(() => []),
    adminGetMessages().catch(() => []),
  ])

  const unreadCount = messages.filter((m) => !m.read).length
  const publishedCount = projects.filter((p) => p.published).length

  const stats = [
    { label: 'TOTAL PROJECT', value: projects.length },
    { label: 'PUBLISHED', value: publishedCount },
    { label: 'TOTAL PESAN', value: messages.length },
    { label: 'BELUM DIBACA', value: unreadCount },
  ]

  async function triggerDeploy() {
    'use server'
    await triggerVercelDeploy()
    redirect('/admin')
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-display text-4xl font-extrabold mb-1">DASHBOARD</h1>
        <p className="font-mono text-xs text-[#727785]">Overview konten portfolio</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
            <span className="font-display text-4xl font-extrabold block">{stat.value}</span>
            <span className="font-mono text-xs text-[#727785] mt-1 block">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
          <h2 className="font-display text-xl font-bold mb-4 pb-3 border-b-[2px] border-black">PROJECT TERBARU</h2>
          <div className="space-y-3">
            {projects.slice(0, 5).map((p) => (
              <div key={p.id} className="flex justify-between items-center py-2 border-b border-[#e8e8e8]">
                <span className="font-body text-sm font-medium">{p.title}</span>
                <span className={`font-mono text-xs px-2 py-1 border-[2px] ${p.published ? 'bg-[#d8e2ff] text-[#001a42] border-black' : 'bg-[#e8e8e8] text-[#727785] border-[#727785]'}`}>
                  {p.published ? 'PUBLISHED' : 'DRAFT'}
                </span>
              </div>
            ))}
            {projects.length === 0 && <p className="font-body text-sm text-[#727785]">Belum ada project.</p>}
          </div>
          <a href="/admin/projects" className="font-mono text-xs font-bold text-[#0058be] mt-4 block hover:underline">
            LIHAT SEMUA →
          </a>
        </div>

        <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
          <h2 className="font-display text-xl font-bold mb-4 pb-3 border-b-[2px] border-black">PESAN TERBARU</h2>
          <div className="space-y-3">
            {messages.slice(0, 5).map((m) => (
              <div key={m.id} className="flex justify-between items-center py-2 border-b border-[#e8e8e8]">
                <div>
                  <span className="font-body text-sm font-medium block">{m.name}</span>
                  <span className="font-mono text-xs text-[#727785]">{m.email}</span>
                </div>
                {!m.read && (
                  <span className="font-mono text-xs px-2 py-1 bg-[#0058be] text-white border-[2px] border-black">BARU</span>
                )}
              </div>
            ))}
            {messages.length === 0 && (
              <p className="font-body text-sm text-[#727785]">Belum ada pesan masuk.</p>
            )}
          </div>
          <a href="/admin/messages" className="font-mono text-xs font-bold text-[#0058be] mt-4 block hover:underline">
            LIHAT SEMUA →
          </a>
        </div>
      </div>

      {process.env.VERCEL_DEPLOY_HOOK_URL && (
        <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
          <h2 className="font-display text-xl font-bold mb-2">DEPLOY</h2>
          <p className="font-mono text-xs text-[#727785] mb-4">Trigger rebuild Vercel agar perubahan konten tampil di publik.</p>
          <form action={triggerDeploy}>
            <button type="submit" className="font-mono text-sm font-bold bg-black text-white px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_#0058be] hover:shadow-[6px_6px_0_0_#0058be] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              TRIGGER REDEPLOY
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
