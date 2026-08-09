import type { Metadata } from 'next'
import { getPublishedProjects } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Projects — Sindu Aditya',
  description: 'Portofolio produk yang sudah saya bangun dari sketsa sampai live di produksi: ERP modular untuk lini produksi, fleet IoT dengan MQTT, platform multi-tenant, dan prototype daur ulang.',
  openGraph: {
    type: 'website',
    title: 'Projects — Sindu Aditya',
    description: 'Portofolio produk yang sudah saya bangun dari sketsa sampai live di produksi.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

export default async function ProjectsPage() {
  const projects = await getPublishedProjects().catch(() => [])

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <a href="/#work" className="inline-flex items-center gap-2 font-mono text-sm font-bold mb-8 hover:text-[#0058be] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            BACK TO HOME
          </a>
          <div className="flex items-center gap-6 mb-6">
            <span className="font-mono text-xs font-bold bg-black text-white px-4 py-2">01</span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold">SEMUA PROJECT</h1>
          </div>
          <p className="font-body text-xl text-[#424754] max-w-2xl">Setiap produk dimulai dari masalah. Koleksi project yang sudah saya bangun dari sketsa sampai live di produksi.</p>
        </div>

        {projects.length === 0 ? (
          <p className="font-body text-[#727785]">Belum ada project yang dipublikasikan.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => {
              const coverUrl = project.cover_image_url?.startsWith('http') ? project.cover_image_url : null
              const initial = project.cover_initial ?? project.title.charAt(0)
              return (
                <a key={project.slug} href={`/projects/${project.slug}`} className="work-card group block bg-white border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="h-80 bg-[#e8e8e8] border-b-[4px] border-black relative overflow-hidden">
                    {coverUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={coverUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] flex items-center justify-center">
                          <span className="font-display text-8xl font-extrabold text-[#c2c6d6]">{initial}</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 font-mono text-xs font-bold text-[#727785]">{project.year}</div>
                    <div className="work-overlay absolute inset-0 bg-[#0058be]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-mono text-sm font-bold text-white border-[2px] border-white px-6 py-3">LIHAT PROJECT</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags ?? []).map(tag => (
                        <span key={tag} className="font-mono text-xs font-bold bg-[#d8e2ff] text-[#001a42] px-3 py-1 border-[2px] border-black">{tag}</span>
                      ))}
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-2 group-hover:text-[#0058be] transition-colors">{project.title}</h2>
                    <p className="font-mono text-xs text-[#727785] mb-3">{project.role ?? ''}{project.role && project.client ? ' · ' : ''}{project.client ?? ''}</p>
                    {project.problem && <p className="font-body text-[#1a1c1c] leading-relaxed mb-3"><span className="font-bold">Masalah:</span> {project.problem}</p>}
                    {project.description && <p className="font-body text-[#424754] leading-relaxed mb-4">{project.description}</p>}
                    <div className="pt-4 border-t-[2px] border-black">
                      <span className="font-mono text-xs text-[#727785]">LIHAT DETAIL </span>
                      <span className="font-mono text-xs font-bold text-[#0058be]">→</span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}

        <div className="text-center pt-8 border-t-[4px] border-black">
          <a href="/#work" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-mono text-sm font-bold border-[4px] border-black hover:bg-[#0058be] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            BACK TO HOME
          </a>
        </div>
      </div>
    </main>
  )
}
