import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects - Sindu Aditya',
  description: 'Portofolio produk yang sudah saya bangun dari sketsa sampai live di produksi: ERP modular untuk lini produksi, fleet IoT dengan MQTT, platform multi-tenant, dan prototype daur ulang.',
  openGraph: {
    type: 'website',
    title: 'Projects - Sindu Aditya',
    description: 'Portofolio produk yang sudah saya bangun dari sketsa sampai live di produksi.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <header className="h-14 flex items-center px-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] sticky top-0 z-10">
        <Link href="/" className="gnome-btn gnome-hover inline-flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-text-muted)] hover:text-white">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </header>

      <main className="px-8 py-12 lg:px-16 lg:py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Semua Project</h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12 font-light">Setiap produk dimulai dari masalah. Koleksi project yang sudah saya bangun dari sketsa sampai live di produksi.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => {
            const initial = project.cover_initial ?? project.title.charAt(0)
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="gnome-card group block overflow-hidden">
                <div className="h-48 bg-[var(--color-bg)] flex items-center justify-center relative">
                  <span className="text-6xl font-bold text-[var(--color-border-strong)]">{initial}</span>
                  <span className="absolute top-4 right-4 text-xs text-[var(--color-text-muted)]">{project.year}</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tags ?? []).map(tag => (
                      <span key={tag} className="text-[10px] font-medium bg-[var(--color-accent-secondary)] text-white rounded-full px-2.5 py-1">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-xl font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h2>
                  <p className="text-xs text-[var(--color-text-muted)] mb-3">{project.role ?? ''}{project.role && project.client ? ' · ' : ''}{project.client ?? ''}</p>
                  {project.description && <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-light mb-4">{project.description}</p>}
                  <div className="pt-4 border-t border-[var(--color-border)]">
                    <span className="text-xs text-[var(--color-text-muted)]">Lihat detail </span>
                    <span className="text-xs font-medium text-[var(--color-accent)]">→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <Link href="/" className="gnome-btn-pill gnome-hover inline-flex items-center gap-2 border border-[var(--color-border-strong)] text-white px-6 py-3 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
