import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const work = [
  {
    id: 'firstudio',
    period: '2026 – present',
    organization: 'Firstudio',
    role: 'Web Developer Intern · Hybrid',
    description:
      'At Firstudio, my internship centers on developing a digital village website while working in a hybrid setup.',
  },
  {
    id: 'ristack',
    period: 'Nov 2025 – present',
    organization: 'RISTACK',
    role: 'Full-Stack Developer & Project Manager',
    description:
      'I build business applications and internal software for organizations and clients, using Laravel, PHP, and MySQL.',
    detail:
      'The work includes building REST APIs, turning client requirements into application workflows, coordinating development, and staying in touch with clients as those requirements take shape.',
    stack: 'Laravel · PHP · MySQL · REST APIs',
    illustration: '/illustrations/half-thinking.png',
  },
  {
    id: 'bengkel-koding',
    period: 'Aug 2025 – Aug 2026',
    organization: 'Bengkel Koding',
    role: 'Full-Stack Developer & Project Manager',
    description:
      'I led development of FIK-Apps, a multi-tenant academic system built with Laravel and Next.js. The work covered five modules: Final Projects, Alumni, Career Guidance, Internship, and Early Warning System.',
    detail:
      'Alongside the academic platform, I worked on backend functionality for an IoT fleet system and real-time features with Laravel Reverb. I also supported VPS migration and Linux server setup, and taught Laravel and MVC to classes of more than 30 students.',
    stack: 'Laravel · Next.js · Laravel Reverb · Linux',
  },
  {
    id: 'sinergi',
    period: 'Nov 2023 – Feb 2024',
    organization: 'PT Sinergi Inovasi Tekno',
    role: 'Laravel Developer · Remote Internship',
    description:
      'During a remote internship, I worked with a team on two web projects: a company profile and a mail management application.',
    detail:
      'The role gave me hands-on practice writing cleaner code, working through project tasks with a team, and managing time across both projects.',
    stack: 'Laravel',
  },
  {
    id: 'dnti',
    period: 'Jan – Apr 2022',
    organization: 'PT Dinustek',
    role: 'Laravel Developer · On-site Internship',
    description:
      'I learned Laravel by working on web application features during an on-site internship, from MVC structure to basic CRUD flows.',
    detail:
      'The experience also introduced me to clean code, development best practices, and working with a team in a company setting.',
    stack: 'Laravel',
  },
]

const alongside = [
  {
    period: '2025',
    organization: 'Universitas Gadjah Mada',
    role: 'Academic exchange',
    description: 'Studied blockchain, cloud computing, and machine learning from February to June.',
  },
  {
    period: '2024–25',
    organization: 'HIMTI · Universitas Dian Nuswantoro',
    role: 'Project Manager',
    description: 'Coordinated 55 committee members for Semnasti 2024, an event with more than 550 participants, and developed an organizational website.',
  },
  {
    period: '2024–25',
    organization: 'Klora',
    role: 'Core Team Lead',
    description: 'Led a five-person team building a recycling-focused web and mobile platform. Klora reached the Top 10 at ECOTHON 2024 ASEAN.',
  },
  {
    period: '2023–25',
    organization: 'Dian Nuswantoro Computer Club',
    role: 'Web Division · Intern, then part-time',
    description: 'Interned from Nov 2023 to Nov 2024 and worked part-time from Aug 2024 to Jul 2025. Used Laravel to help build the Dinacom 2024 participant registration website.',
  },
  {
    period: '2022–23',
    organization: 'Snapandev Community',
    role: 'Student Mentor · Co-Founder',
    description: 'Co-founded the community from Aug to Dec 2022 and served as a student mentor from Aug 2022 to May 2023.',
  },
  {
    period: '2021',
    organization: 'Infradigital Foundation',
    role: 'Student Intern',
    description: 'Studied responses to cyberattacks, common web security gaps, and red-team and blue-team approaches to web penetration testing using Kali Linux.',
  },
]

export default function Experience() {
  const [activeId, setActiveId] = useState(work[0].id)
  const reduceMotion = useReducedMotion()
  const active = work.find((entry) => entry.id === activeId)

  return (
    <section id="experience" className="shell scroll-mt-24 pb-24 sm:pb-32">
      <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-ink">
        Experience
      </h2>
      <p className="mt-2 text-base text-ink-soft">
        Things I&apos;ve worked on along the way.
      </p>

      <div className="mt-12 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.72rem] text-ink-soft">
        <span>WORK HISTORY</span>
        <span>{String(work.length).padStart(2, '0')} ENTRIES</span>
      </div>

      <div className="grid gap-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] md:gap-10">
        <nav
          aria-label="Work experience"
          className="-mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 py-4 sm:-mx-8 sm:px-8 md:mx-0 md:block md:overflow-visible md:px-0 md:py-0"
        >
          {work.map((entry) => {
            const selected = entry.id === activeId
            return (
              <button
                key={entry.id}
                type="button"
                aria-pressed={selected}
                aria-controls="experience-detail"
                onClick={() => setActiveId(entry.id)}
                className={`w-[14rem] shrink-0 snap-start border-b px-3 py-4 text-left transition-colors sm:w-[16rem] md:w-full md:border-l-2 md:border-b md:py-5 ${selected ? 'border-ember bg-ember-wash/40' : 'border-line hover:bg-surface'}`}
              >
                <span className="block font-mono text-[0.7rem] text-ink-soft">{entry.period}</span>
                <span className="mt-2 block font-display text-base font-semibold leading-snug tracking-[-0.025em] text-ink">
                  {entry.organization}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-ink-soft">{entry.role}</span>
              </button>
            )
          })}
        </nav>

        <div id="experience-detail" className="min-w-0 border-t border-line pt-6 md:border-t-0 md:border-l md:py-7 md:pl-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              aria-live="polite"
            >
              <p className="font-mono text-[0.72rem] text-ink-soft">
                {active.period} <span aria-hidden="true">/</span> {active.role}
              </p>
              <h3 className="mt-5 max-w-[22ch] font-display text-[clamp(1.65rem,3vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-ink">
                {active.organization}
              </h3>
              <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-ink">
                {active.description}
              </p>
              {active.detail && (
                <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-ink-soft sm:text-base">
                  {active.detail}
                </p>
              )}
              {active.stack && (
                <p className="mt-7 border-t border-line pt-4 font-mono text-[0.72rem] leading-relaxed text-ink-soft">
                  {active.stack}
                </p>
              )}
              {active.illustration && (
                <img
                  src={active.illustration}
                  alt=""
                  width="1254"
                  height="1254"
                  loading="lazy"
                  draggable="false"
                  className="ml-auto mt-3 h-32 w-32 select-none object-contain mix-blend-multiply sm:h-40 sm:w-40"
                />
              )}
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-8 sm:mt-20">
        <h3 className="font-display text-[clamp(1.45rem,2.5vw,1.9rem)] font-semibold tracking-[-0.035em] text-ink">
          Campus, teams &amp; learning
        </h3>
        <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-soft sm:text-base">
          Academic exchange, student organizations, team projects, and security studies.
        </p>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {alongside.map((entry) => (
            <article key={entry.organization} className="border-t border-line pt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-display text-base font-semibold tracking-[-0.02em] text-ink">
                  {entry.organization}
                </h4>
                <span className="font-mono text-[0.7rem] text-ink-soft">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{entry.role}</p>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-ink">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
