'use client'

import { ArrowRight } from 'lucide-react'
import { SITE, STATS } from '@/lib/site-content'
import { useDesktop } from '@/components/desktop/desktop-context'

export default function Hero() {
  const { openApp } = useDesktop()

  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <span className="inline-block text-xs font-medium tracking-wide bg-[var(--color-accent-secondary)] text-white rounded-full px-4 py-1.5 mb-6">
        {SITE.heroBadge}
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-5">
        DESIGN BUSINESS SOLUTIONS<br />
        <span className="text-[var(--color-accent)]">THAT DELIVER IMPACT.</span>
      </h1>

      <p className="text-[var(--color-text-muted)] max-w-2xl mb-8 leading-relaxed font-light">
        {SITE.heroSubhead}
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => openApp('work')}
          className="gnome-btn-pill inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-2.5 text-sm font-medium"
        >
          Lihat Produk
          <ArrowRight size={16} />
        </button>
        <button
          onClick={() => openApp('contact')}
          className="gnome-btn-pill gnome-hover inline-flex items-center gap-2 border border-[var(--color-border-strong)] text-white px-5 py-2.5 text-sm font-medium"
        >
          Hubungi Saya
        </button>
      </div>

      {STATS.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="gnome-card px-5 py-4 min-w-[140px]">
              <span className="block text-2xl font-bold text-[var(--color-accent)]">{stat.value}</span>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
        <div className="w-11 h-11 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center font-bold text-[var(--color-accent)]">
          SA
        </div>
        <span>{SITE.location}</span>
      </div>
    </section>
  )
}
