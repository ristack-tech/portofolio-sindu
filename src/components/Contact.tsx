import type { SiteSettings } from '@/lib/supabase'
import { sendContactMessage } from '@/lib/actions'

type Props = { settings: SiteSettings | null; sent?: boolean }

export default function Contact({ settings, sent }: Props) {
  const email = settings?.contact_email ?? 'nduujanadi51@gmail.com'
  const statusText = settings?.contact_status_text ?? 'TERSEDIA UNTUK KOLABORASI BARU'
  const heading = settings?.contact_heading ?? 'Punya masalah operasional'
  const headingAccent = settings?.contact_heading_accent ?? 'yang butuh dipecahkan?'
  const intro = settings?.contact_intro ?? 'Terbuka untuk peran backend engineer, technical project lead, atau system designer — freelance, part-time, atau full-time. Kalau kamu punya masalah nyata yang perlu diterjemahkan jadi sistem yang jalan, ayo ngobrol.'

  return (
    <section id="contact" className="border-b-[8px] border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {sent && (
          <div className="mb-8 bg-[#d8e2ff] border-[4px] border-black p-4">
            <p className="font-mono text-sm font-bold text-[#001a42]">Pesan terkirim! Saya akan membalas dalam 24 jam.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <div className="section-header flex items-center gap-6 mb-8">
              <span className="font-mono text-xs font-bold bg-black text-white px-4 py-2">04</span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold">CONTACT</h2>
            </div>

            <h3 className="contact-heading font-display text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              {heading}<br/>
              <span className="text-[#0058be]">{headingAccent}</span>
            </h3>

            <p className="contact-text font-body text-lg text-[#424754] leading-relaxed mb-8">{intro}</p>

            <a href={`mailto:${email}`} className="contact-email inline-flex items-center gap-3 bg-[#0058be] text-white px-8 py-4 font-mono text-sm font-bold border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {email.toUpperCase()}
            </a>

            <div className="contact-status mt-12 p-6 bg-[#f3f3f3] border-[4px] border-black">
              <div className="flex items-center gap-4">
                <div className="status-dot w-4 h-4 bg-green-500 border-[2px] border-black animate-pulse"></div>
                <span className="font-mono text-sm font-bold">{statusText.toUpperCase()}</span>
              </div>
              <p className="font-body text-sm text-[#424754] mt-3">Biasanya merespon dalam 24 jam</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form action={sendContactMessage} className="contact-form bg-[#f3f3f3] border-[4px] border-black p-8 shadow-[6px_6px_0_0_#000]">
              <div className="form-group mb-6">
                <label className="form-label font-mono text-xs font-bold tracking-widest mb-2 block">NAMA</label>
                <input type="text" name="name" required className="form-input w-full bg-white border-[2px] border-black p-4 font-body text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors placeholder:text-[#727785]" placeholder="Nama lengkap"/>
              </div>
              <div className="form-group mb-6">
                <label className="form-label font-mono text-xs font-bold tracking-widest mb-2 block">EMAIL</label>
                <input type="email" name="email" required className="form-input w-full bg-white border-[2px] border-black p-4 font-body text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors placeholder:text-[#727785]" placeholder="email@perusahaan.com"/>
              </div>
              <div className="form-group mb-6">
                <label className="form-label font-mono text-xs font-bold tracking-widest mb-2 block">MASALAH YANG MAU DIPECAHKAN</label>
                <input type="text" name="subject" className="form-input w-full bg-white border-[2px] border-black p-4 font-body text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors placeholder:text-[#727785]" placeholder="Contoh: sistem fleet tracking real-time"/>
              </div>
              <div className="form-group mb-6">
                <label className="form-label font-mono text-xs font-bold tracking-widest mb-2 block">DETAIL</label>
                <textarea name="message" rows={5} required className="form-textarea w-full bg-white border-[2px] border-black p-4 font-body text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors resize-none placeholder:text-[#727785]" placeholder="Ceritakan konteks, tim, dan timeline..."></textarea>
              </div>
              <button type="submit" className="submit-btn w-full bg-[#0058be] text-white py-4 font-mono text-sm font-bold border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
