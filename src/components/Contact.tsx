import { Mail, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/site-content'

export default function Contact() {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <h3 className="text-2xl font-medium leading-snug mb-6">
        {SITE.contactHeading}<br />
        <span className="text-[var(--color-accent)]">{SITE.contactHeadingAccent}</span>
      </h3>

      <p className="text-[var(--color-text-muted)] leading-relaxed font-light max-w-2xl mb-10">{SITE.contactIntro}</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <a
          href={`mailto:${SITE.email}`}
          className="gnome-btn-pill inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 text-sm font-medium"
        >
          <Mail size={16} />
          {SITE.email}
        </a>

        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gnome-btn-pill gnome-hover inline-flex items-center gap-2 border border-[var(--color-border-strong)] text-white px-6 py-3 text-sm font-medium"
        >
          <MessageCircle size={16} />
          {SITE.whatsappDisplay}
        </a>
      </div>

      <div className="gnome-card p-6 max-w-md">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">{SITE.contactStatusText}</span>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] mt-2 font-light">Biasanya merespon dalam 24 jam</p>
      </div>
    </section>
  )
}
