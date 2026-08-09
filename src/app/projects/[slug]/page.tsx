import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getProjectBySlug, getAllSlugs } from '@/lib/projects'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  const coverImage = project.cover_image_url?.startsWith('http') ? project.cover_image_url : '/og-default.png'
  return {
    title: `${project.title} - Sindu Aditya`,
    description: project.description ?? '',
    openGraph: {
      type: 'article',
      title: `${project.title} - Sindu Aditya`,
      description: project.description ?? '',
      images: [{ url: coverImage }],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const initial = project.cover_initial ?? project.title.charAt(0)

  const problemText = project.problem_full || project.problem
  const roleText = project.role_full || project.role
  const solutionText = project.solution
  const features = project.features ?? []
  const techStack = project.tech_stack ?? []
  const outcomeText = project.outcome_full || project.outcome

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <header className="h-14 flex items-center px-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] sticky top-0 z-10">
        <Link href="/#work" className="gnome-btn gnome-hover inline-flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-text-muted)] hover:text-white">
          <ArrowLeft size={16} />
          Back to Work
        </Link>
      </header>

      <main className="px-8 py-12 lg:px-16 lg:py-16 max-w-4xl mx-auto">
        <div className="mb-12 h-48 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
          <span className="text-8xl font-bold text-[var(--color-border-strong)]">{initial}</span>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {(project.tags ?? []).map(tag => (
              <span key={tag} className="text-[10px] font-medium bg-[var(--color-accent-secondary)] text-white rounded-full px-2.5 py-1">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">{project.title}</h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            {project.role ?? ''}
            {project.role && project.client ? ' · ' : ''}
            {project.client ?? ''}
            {(project.role || project.client) && project.year ? ' · ' : ''}
            {project.year ?? ''}
          </p>
          {project.description && <p className="text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed font-light">{project.description}</p>}
        </div>

        {problemText && (
          <section className="gnome-card p-8 mb-10 border-l-4 border-l-[var(--color-accent)]">
            <span className="text-xs font-medium text-[var(--color-accent)] block mb-3">01 · MASALAH</span>
            <h2 className="text-2xl font-bold mb-4">Konteks & Masalah</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-light">{problemText}</p>
          </section>
        )}

        {roleText && (
          <section className="mb-10">
            <span className="text-xs font-medium text-[var(--color-accent)] block mb-3">02 · PERAN SAYA</span>
            <h2 className="text-2xl font-bold mb-4">Peran Saya</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-light">{roleText}</p>
          </section>
        )}

        {solutionText && (
          <section className="mb-10">
            <span className="text-xs font-medium text-[var(--color-accent)] block mb-3">03 · SOLUSI</span>
            <h2 className="text-2xl font-bold mb-4">Solusi</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-light">{solutionText}</p>
          </section>
        )}

        {features.length > 0 && (
          <section className="mb-10">
            <span className="text-xs font-medium text-[var(--color-accent)] block mb-3">04 · FITUR UTAMA</span>
            <h2 className="text-2xl font-bold mb-6">Fitur Utama</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="gnome-card p-5 flex gap-3 items-start">
                  <span className="text-xs font-medium text-[var(--color-accent)] shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-light">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {techStack.length > 0 && (
          <section className="mb-10">
            <span className="text-xs font-medium text-[var(--color-accent)] block mb-3">05 · TECH STACK</span>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="text-xs font-medium bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-3 py-1.5">{tech}</span>
              ))}
            </div>
          </section>
        )}

        {outcomeText && (
          <section className="gnome-card p-8 mb-10 bg-[var(--color-accent)] border-none">
            <span className="text-xs font-medium block mb-3 text-white/80">06 · HASIL</span>
            <h2 className="text-2xl font-bold mb-4 leading-tight">Hasil & Dampak</h2>
            <p className="leading-relaxed font-light">{outcomeText}</p>
          </section>
        )}

        <div className="pt-8 border-t border-[var(--color-border)]">
          <Link href="/projects" className="gnome-btn-pill gnome-hover inline-flex items-center gap-2 border border-[var(--color-border-strong)] text-white px-6 py-3 text-sm font-medium">
            <ArrowLeft size={16} />
            Semua Project
          </Link>
        </div>
      </main>
    </div>
  )
}
