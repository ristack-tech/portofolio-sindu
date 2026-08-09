import { adminGetMessages, adminMarkMessageRead, adminDeleteMessage } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import ConfirmButton from '@/components/admin/ConfirmButton'

type Props = { params: Promise<{ id: string }> }

export default async function MessageDetailPage({ params }: Props) {
  const { id } = await params
  const messages = await adminGetMessages().catch(() => [])
  const msg = messages.find((m) => m.id === id)
  if (!msg) notFound()

  async function markRead(formData: FormData) {
    'use server'
    const read = formData.get('read') === 'true'
    await adminMarkMessageRead(id, read)
    redirect(`/admin/messages/${id}`)
  }

  async function deleteMessage() {
    'use server'
    await adminDeleteMessage(id)
    redirect('/admin/messages')
  }

  return (
    <div>
      <div className="mb-8">
        <a href="/admin/messages" className="font-mono text-xs text-[#727785] hover:text-black transition-colors">← BACK</a>
        <h1 className="font-display text-4xl font-extrabold mt-2">DETAIL PESAN</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Isi pesan */}
        <div className="lg:col-span-2 bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
          {msg.subject && (
            <h2 className="font-display text-2xl font-bold mb-4">{msg.subject}</h2>
          )}
          <p className="font-body text-base text-[#1a1c1c] whitespace-pre-wrap leading-relaxed">{msg.message}</p>
        </div>

        {/* Metadata */}
        <div className="space-y-4">
          <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-4 pb-2 border-b-[2px] border-black">PENGIRIM</h3>
            <div className="space-y-3">
              <div>
                <span className="font-mono text-xs text-[#727785] block">NAMA</span>
                <span className="font-body text-sm font-medium">{msg.name}</span>
              </div>
              <div>
                <span className="font-mono text-xs text-[#727785] block">EMAIL</span>
                <a href={`mailto:${msg.email}`} className="font-mono text-sm text-[#0058be] hover:underline">{msg.email}</a>
              </div>
              <div>
                <span className="font-mono text-xs text-[#727785] block">TANGGAL</span>
                <span className="font-mono text-xs">
                  {new Date(msg.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div>
                <span className="font-mono text-xs text-[#727785] block mb-1">STATUS</span>
                {msg.read ? (
                  <span className="font-mono text-xs px-2 py-1 bg-[#e8e8e8] text-[#727785] border-[2px] border-[#727785]">DIBACA</span>
                ) : (
                  <span className="font-mono text-xs px-2 py-1 bg-[#0058be] text-white border-[2px] border-black">BARU</span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-4 pb-2 border-b-[2px] border-black">AKSI</h3>
            <div className="space-y-3">
              <form action={markRead}>
                <input type="hidden" name="read" value={msg.read ? 'false' : 'true'} />
                <button type="submit" className="w-full font-mono text-xs font-bold bg-white border-[2px] border-black px-4 py-2 hover:bg-[#f3f3f3] transition-colors">
                  {msg.read ? 'TANDAI BELUM DIBACA' : 'TANDAI SUDAH DIBACA'}
                </button>
              </form>
              <form action={deleteMessage}>
                <ConfirmButton message="Hapus pesan ini secara permanen?" className="w-full font-mono text-xs font-bold text-[#ba1a1a] border-[2px] border-[#ba1a1a] px-4 py-2 hover:bg-[#ffdad6] transition-colors">
                  HAPUS PESAN
                </ConfirmButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
