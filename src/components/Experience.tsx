import type { Experience as ExperienceType } from '@/lib/supabase'

type Props = { experiences: ExperienceType[] }

export default function Experience({ experiences }: Props) {
  return (
    <section id="experience" className="border-b-[8px] border-black bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="section-header flex items-center gap-6 mb-16">
          <span className="font-mono text-xs font-bold bg-black text-white px-4 py-2">03</span>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">EXPERIENCE</h2>
            <p className="font-body text-[#424754] mt-1">Perjalanan dari kepanitiaan, magang, sampai memimpin produk di produksi.</p>
          </div>
        </div>

        {experiences.length === 0 ? (
          <p className="font-body text-[#727785]">Belum ada experience yang ditampilkan.</p>
        ) : (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="exp-item grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3 exp-period">
                  <span className="font-mono text-xs font-bold text-[#727785] block">{exp.period}</span>
                  {exp.location && <span className="font-mono text-xs text-[#727785] block mt-1">{exp.location}</span>}
                </div>
                <div className="md:col-span-9 bg-white border-[4px] border-black p-6 exp-card">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <div>
                      <h4 className="font-display text-xl font-bold">{exp.role}</h4>
                      <p className="font-body text-[#0058be] font-medium">{exp.company}</p>
                    </div>
                    <span className="exp-badge font-mono text-xs font-bold bg-[#d8e2ff] text-[#001a42] px-3 py-1 border-[2px] border-black">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  {exp.summary && <p className="font-body text-[#1a1c1c] leading-relaxed">{exp.summary}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
