import { SITE, SKILLS } from '@/lib/site-content'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './desktop/brand-icons'

export default function About() {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About</h2>

      <h3 className="text-2xl font-medium leading-snug mb-6">
        {SITE.aboutHeading}<br />
        <span className="text-[var(--color-accent)]">{SITE.aboutHeadingAccent}</span>
      </h3>

      <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed font-light max-w-3xl mb-10">
        {SITE.aboutParagraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
      </div>

      <div className="flex gap-2 mb-12">
        <a href={SITE.socialLinkedin} className="gnome-btn gnome-hover w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white">
          <LinkedinIcon size={18} />
        </a>
        <a href={SITE.socialGithub} className="gnome-btn gnome-hover w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white">
          <GithubIcon size={18} />
        </a>
        <a href={`mailto:${SITE.email}`} className="gnome-btn gnome-hover w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white">
          <Mail size={18} />
        </a>
      </div>

      {SKILLS.length > 0 && (
        <div>
          <h4 className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] mb-4">TECHNICAL STACK</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILLS.map((skill) => (
              <div key={skill.category} className="gnome-card p-4">
                <span className="block text-sm font-medium text-[var(--color-accent)] mb-1">{skill.category}</span>
                <span className="text-sm text-[var(--color-text-muted)]">{skill.items.join(' • ')}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
