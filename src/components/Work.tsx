import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export default function Work() {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
      <p className="text-[var(--color-text-muted)] mb-10 font-light">Setiap produk dimulai dari masalah. Ini yang sudah saya bangun dari sketsa sampai dipakai.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => {
          const initial = project.cover_initial ?? project.title.charAt(0)
          return (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="gnome-card group block overflow-hidden">
              <div className="h-40 bg-[var(--color-bg)] flex items-center justify-center relative">
                <span className="text-5xl font-bold text-[var(--color-border-strong)]">{initial}</span>
                <span className="absolute top-3 right-3 text-xs text-[var(--color-text-muted)]">{project.year}</span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {(project.tags ?? []).map(tag => (
                    <span key={tag} className="text-[10px] font-medium bg-[var(--color-accent-secondary)] text-white rounded-full px-2.5 py-1">{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] mb-3">{project.role ?? ''}{project.role && project.client ? ' · ' : ''}{project.client ?? ''}</p>
                {project.outcome && <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-light">{project.outcome}</p>}
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-10">
        <Link href="/projects" className="gnome-btn-pill gnome-hover inline-flex items-center gap-2 border border-[var(--color-border-strong)] text-white px-6 py-3 text-sm font-medium">
          Semua Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
