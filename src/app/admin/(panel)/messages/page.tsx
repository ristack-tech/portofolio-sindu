import { adminGetMessages } from '@/lib/supabase'
import Link from 'next/link'

export default async function AdminMessagesPage() {
  const messages = await adminGetMessages().catch(() => [])
  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div>
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="font-display text-4xl font-extrabold mb-1">PESAN MASUK</h1>
          <p className="font-mono text-xs text-[#727785]">
            {messages.length} total · <span className="text-[#0058be] font-bold">{unreadCount} belum dibaca</span>
          </p>
        </div>
      </div>

      <div className="bg-white border-[4px] border-black shadow-[4px_4px_0_0_#000]">
        {messages.length === 0 ? (
          <div className="p-8 text-center">
            <p className="font-body text-[#727785]">Belum ada pesan masuk.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b-[4px] border-black">
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">PENGIRIM</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4 hidden md:table-cell">SUBJEK</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4 hidden lg:table-cell">TANGGAL</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">STATUS</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, i) => (
                <tr
                  key={msg.id}
                  className={`${i < messages.length - 1 ? 'border-b-[2px] border-black' : ''} ${!msg.read ? 'bg-[#f0f5ff]' : ''}`}
                >
                  <td className="p-4">
                    <p className={`font-body text-sm ${!msg.read ? 'font-bold' : 'font-medium'}`}>{msg.name}</p>
                    <p className="font-mono text-xs text-[#727785]">{msg.email}</p>
                  </td>
                  <td className="p-4 font-body text-sm text-[#727785] hidden md:table-cell">
                    {msg.subject ?? '—'}
                  </td>
                  <td className="p-4 font-mono text-xs text-[#727785] hidden lg:table-cell">
                    {new Date(msg.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="p-4">
                    {!msg.read ? (
                      <span className="font-mono text-xs px-2 py-1 bg-[#0058be] text-white border-[2px] border-black">BARU</span>
                    ) : (
                      <span className="font-mono text-xs px-2 py-1 bg-[#e8e8e8] text-[#727785] border-[2px] border-[#727785]">DIBACA</span>
                    )}
                  </td>
                  <td className="p-4">
                    <Link
                      href={`/admin/messages/${msg.id}`}
                      className="font-mono text-xs font-bold text-[#0058be] hover:underline"
                    >
                      LIHAT
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
