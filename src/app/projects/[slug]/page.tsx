import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllPublishedSlugs } from '@/lib/supabase'
import type { ProjectDetail } from '@/lib/supabase'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs().catch(() => [])
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}
  const coverImage = project.cover_image_url?.startsWith('http') ? project.cover_image_url : '/og-default.png'
  return {
    title: `${project.title} — Sindu Aditya`,
    description: project.description ?? '',
    openGraph: {
      type: 'article',
      title: `${project.title} — Sindu Aditya`,
      description: project.description ?? '',
      images: [{ url: coverImage }],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const detail = Array.isArray(project.project_details)
    ? (project.project_details[0] as ProjectDetail | undefined)
    : (project.project_details as ProjectDetail | undefined)

  const coverUrl = project.cover_image_url?.startsWith('http') ? project.cover_image_url : null
  const initial = project.cover_initial ?? project.title.charAt(0)

  const problemText = detail?.problem_full || project.problem
  const roleText = detail?.role_full || project.role
  const solutionText = detail?.solution
  const features = detail?.features ?? []
  const techStack = detail?.tech_stack ?? []
  const outcomeText = detail?.outcome_full || project.outcome

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <a href="/#work" className="inline-flex items-center gap-2 font-mono text-sm font-bold mb-8 hover:text-[#0058be] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          BACK TO WORK
        </a>

        {/* Cover image */}
        {coverUrl ? (
          <div className="mb-12 h-64 md:h-96 border-[4px] border-black overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={coverUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="mb-12 h-48 bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] border-[4px] border-black flex items-center justify-center">
            <span className="font-display text-8xl font-extrabold text-[#c2c6d6]">{initial}</span>
          </div>
        )}

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {(project.tags ?? []).map(tag => (
              <span key={tag} className="font-mono text-xs font-bold bg-[#d8e2ff] text-[#001a42] px-3 py-1 border-[2px] border-black">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-4">{project.title}</h1>
          <p className="font-mono text-sm text-[#727785] mb-6">
            {project.role ?? ''}
            {project.role && project.client ? ' · ' : ''}
            {project.client ?? ''}
            {(project.role || project.client) && project.year ? ' · ' : ''}
            {project.year ?? ''}
          </p>
          {project.description && <p className="font-body text-xl text-[#424754] max-w-3xl leading-relaxed">{project.description}</p>}
        </div>

        {problemText && (
          <section className="mb-16 bg-[#f3f3f3] border-[4px] border-black border-l-[8px] p-8 shadow-[6px_6px_0_0_#000]">
            <span className="font-mono text-xs font-bold text-[#0058be] block mb-3">01 · MASALAH</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">Konteks & Masalah</h2>
            <p className="font-body text-lg text-[#1a1c1c] leading-relaxed">{problemText}</p>
          </section>
        )}

        {roleText && (
          <section className="mb-16">
            <span className="font-mono text-xs font-bold text-[#0058be] block mb-3">02 · PERAN SAYA</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">Peran Saya</h2>
            <p className="font-body text-lg text-[#424754] leading-relaxed">{roleText}</p>
          </section>
        )}

        {solutionText && (
          <section className="mb-16">
            <span className="font-mono text-xs font-bold text-[#0058be] block mb-3">03 · SOLUSI</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">Solusi</h2>
            <p className="font-body text-lg text-[#424754] leading-relaxed">{solutionText}</p>
          </section>
        )}

        {features.length > 0 && (
          <section className="mb-16">
            <span className="font-mono text-xs font-bold text-[#0058be] block mb-3">04 · FITUR UTAMA</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-6">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="bg-white border-[4px] border-black p-6 flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold text-[#0058be] shrink-0 mt-1">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-body text-[#1a1c1c] leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {techStack.length > 0 && (
          <section className="mb-16">
            <span className="font-mono text-xs font-bold text-[#0058be] block mb-3">05 · TECH STACK</span>
            <div className="flex flex-wrap gap-3">
              {techStack.map(tech => (
                <span key={tech} className="font-mono text-sm font-bold bg-black text-white px-4 py-2 border-[2px] border-black">{tech}</span>
              ))}
            </div>
          </section>
        )}

        {outcomeText && (
          <section className="mb-16 bg-[#0058be] text-white border-[4px] border-black p-8 shadow-[6px_6px_0_0_#000]">
            <span className="font-mono text-xs font-bold block mb-3">06 · HASIL</span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4 leading-tight">Hasil & Dampak</h2>
            <p className="font-body text-lg leading-relaxed">{outcomeText}</p>
          </section>
        )}

        <div className="text-center pt-8 border-t-[4px] border-black">
          <a href="/projects" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-mono text-sm font-bold border-[4px] border-black hover:bg-[#0058be] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            SEMUA PROJECT
          </a>
        </div>
      </div>
    </main>
  )
}
