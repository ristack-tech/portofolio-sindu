import type { Project } from '@/lib/supabase'

type Props = { projects: Project[] }

export default function Work({ projects }: Props) {
  return (
    <section id="work" className="border-b-[8px] border-black bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="section-header flex items-center gap-6 mb-16">
          <span className="font-mono text-xs font-bold bg-black text-white px-4 py-2">01</span>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">SELECTED WORK</h2>
            <p className="font-body text-[#424754] mt-1">Setiap produk dimulai dari masalah. Ini yang sudah saya bangun dari sketsa sampai dipakai.</p>
          </div>
        </div>

        {projects.length === 0 ? (
          <p className="font-body text-[#727785]">Belum ada project yang dipublikasikan.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const coverUrl = project.cover_image_url?.startsWith('http') ? project.cover_image_url : null
              const initial = project.cover_initial ?? project.title.charAt(0)
              return (
                <a key={project.slug} href={`/projects/${project.slug}`} className="work-card group block bg-white border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="h-64 bg-[#e8e8e8] border-b-[4px] border-black relative overflow-hidden">
                    {coverUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={coverUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center project-image">
                        <div className="w-full h-full bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] flex items-center justify-center">
                          <span className="project-initial font-display text-6xl font-extrabold text-[#c2c6d6]">{initial}</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 font-mono text-xs font-bold text-[#727785]">{project.year}</div>
                    <div className="work-overlay absolute inset-0 bg-[#0058be]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-mono text-sm font-bold text-white border-[2px] border-white px-6 py-3">LIHAT PROJECT</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags ?? []).map(tag => (
                        <span key={tag} className="font-mono text-xs font-bold bg-[#d8e2ff] text-[#001a42] px-3 py-1 border-[2px] border-black">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-[#0058be] transition-colors">{project.title}</h3>
                    <p className="font-mono text-xs text-[#727785] mb-3">{project.role ?? ''}{project.role && project.client ? ' · ' : ''}{project.client ?? ''}</p>
                    {project.problem && <p className="font-body text-[#1a1c1c] leading-relaxed mb-3"><span className="font-bold">Masalah:</span> {project.problem}</p>}
                    {project.outcome && <p className="font-body text-[#424754] leading-relaxed"><span className="font-bold text-[#0058be]">Hasil:</span> {project.outcome}</p>}
                  </div>
                </a>
              )
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <a href="/projects" className="work-cta inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-mono text-sm font-bold border-[4px] border-black shadow-[6px_6px_0_0_#0058be] hover:shadow-[8px_8px_0_0_#0058be] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
            SEMUA PROJECT
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
