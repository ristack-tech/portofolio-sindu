import { EXPERIENCES } from '@/lib/site-content'

export default function Experience() {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Experience</h2>
      <p className="text-[var(--color-text-muted)] mb-10 font-light">Perjalanan dari kepanitiaan, magang, sampai memimpin produk di produksi.</p>

      <div className="space-y-4">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="gnome-card p-6 flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-40 shrink-0 text-xs text-[var(--color-text-muted)]">
              <span className="block font-medium">{exp.period}</span>
              {exp.location && <span className="block mt-1">{exp.location}</span>}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <p className="text-[var(--color-accent)] text-sm">{exp.company}</p>
                </div>
                <span className="shrink-0 text-xs font-medium bg-[var(--color-accent-secondary)] text-white rounded-full px-2.5 py-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              {exp.summary && <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-light">{exp.summary}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
