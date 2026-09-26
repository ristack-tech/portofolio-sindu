import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const experiences = [
  {
    id: 'fik-apps',
    period: '2026',
    role: 'PM & Backend Developer',
    organization: 'FIK-Apps',
    summary:
      'Multi-tenant architecture, backend systems, and faculty-level administration.',
    contribution:
      '[DUMMY] Designed the backend architecture and coordinated implementation across the team.',
    stack: 'Laravel · PostgreSQL · Docker',
    illustration: '/illustrations/half-proud.png',
  },
  {
    id: 'nexa-research',
    period: '2025–26',
    role: 'Research Assistant',
    organization: 'Nexa IoT Lab',
    summary:
      '[DUMMY] Explored connected-device systems and translated research questions into working technical experiments.',
    contribution:
      '[DUMMY] Prototyped, documented, and evaluated approaches with the research team.',
    stack: 'IoT · MQTT · System Design',
    illustration: '/illustrations/half-thinking.png',
  },
  {
    id: 'fleettrack',
    period: '2025',
    role: 'Backend Developer',
    organization: 'Nexa FleetTrack',
    summary:
      'Built the real-time path between vehicle telemetry, operational storage, and the monitoring interface.',
    contribution:
      '[DUMMY] Implemented backend services for MQTT ingestion, WebSocket delivery, and telemetry history.',
    stack: 'Laravel · MQTT · WebSocket',
    illustration: '/illustrations/half-coding.png',
  },
  {
    id: 'ugm-exchange',
    period: '2025',
    role: 'Exchange Student',
    organization: 'Universitas Gadjah Mada',
    summary:
      '[DUMMY] Studied in a different academic environment and collaborated with people outside my usual campus context.',
    contribution:
      '[DUMMY] Add the courses, projects, or key learning that best represent this exchange period.',
    stack: 'Academic Exchange · Collaboration',
    illustration: '/illustrations/half-idea.png',
  },
  {
    id: 'semnasti',
    period: '2024–25',
    role: 'Project Manager',
    organization: 'SEMNASTI · HIMTI UDINUS',
    summary:
      '[DUMMY] Helped organize a technology-focused program involving multiple teams and stakeholders.',
    contribution:
      '[DUMMY] Add the event scope, team responsibility, and outcome that should be highlighted.',
    stack: 'Leadership · Operations · Communication',
  },
  {
    id: 'sinergi',
    period: '2023–24',
    role: 'Freelance Full-Stack Developer',
    organization: 'PT Sinergi Inovasi Tekno',
    summary:
      '[DUMMY] Delivered web application work based on operational requirements from a client environment.',
    contribution:
      '[DUMMY] Add the product scope, technical ownership, and measurable delivery result.',
    stack: 'Web Development · API · Database',
  },
]

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="shell scroll-mt-24 pb-24 sm:pb-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-ink">
          Experience
        </h2>
        <p className="mt-2 text-base text-ink-soft">
          Things I&apos;ve worked on along the way.
        </p>
      </motion.div>

      <div className="mt-12 border-t border-line">
        {experiences.map((experience, index) => {
          const isOpen = activeExperience === experience.id
          const detailId = `${experience.id}-experience-detail`

          return (
            <motion.article
              key={experience.id}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                layout: { type: 'spring', stiffness: 280, damping: 30 },
                delay: reduceMotion ? 0 : index * 0.045,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`border-b transition-colors duration-200 ${
                isOpen ? 'border-ember bg-ember-wash/45' : 'border-line bg-white'
              }`}
            >
              <button
                type="button"
                className="group grid min-h-[6.25rem] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-2 py-5 text-left transition-colors hover:bg-surface sm:px-3 md:grid-cols-[8rem_minmax(0,1fr)_auto]"
                aria-expanded={isOpen}
                aria-controls={detailId}
                onClick={() =>
                  setActiveExperience((current) =>
                    current === experience.id ? null : experience.id,
                  )
                }
              >
                <span className="self-start pt-1 font-mono text-[0.75rem] text-ink-soft md:self-center md:pt-0">
                  {experience.period}
                </span>

                <span className="col-start-1 row-start-2 min-w-0 md:col-start-2 md:row-start-1">
                  <span className="block font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-ink transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[1.15rem]">
                    {experience.role}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">
                    {experience.organization}
                  </span>
                </span>

                <motion.span
                  className="col-start-2 row-span-2 row-start-1 flex h-11 w-11 items-center justify-center rounded-lg text-ink md:col-start-3 md:row-span-1"
                  animate={reduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 25 }}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <MinusIcon className="h-5 w-5" />
                  ) : (
                    <PlusIcon className="h-5 w-5" />
                  )}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={detailId}
                    key="detail"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.34,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 md:ml-[8rem] md:pr-3">
                      <div
                        className={`border border-line bg-surface px-5 py-6 sm:px-7 sm:py-7 ${
                          experience.illustration
                            ? 'grid items-end gap-7 md:grid-cols-[minmax(0,1fr)_15rem]'
                            : ''
                        }`}
                      >
                        <div className="max-w-[60ch]">
                          <p className="font-mono text-[0.68rem] text-ink-soft">
                            WHAT I WORKED ON
                          </p>
                          <p
                            className={`mt-2 text-sm leading-relaxed ${
                              experience.summary.startsWith('[DUMMY]')
                                ? 'font-mono text-[0.78rem] text-ink-soft'
                                : 'text-ink'
                            }`}
                          >
                            {experience.summary}
                          </p>

                          <p className="mt-6 font-mono text-[0.68rem] text-ink-soft">
                            CONTRIBUTION
                          </p>
                          <p className="mt-2 font-mono text-[0.78rem] leading-relaxed text-ink-soft">
                            {experience.contribution}
                          </p>

                          <p className="mt-6 font-mono text-[0.68rem] text-ink-soft">
                            STACK
                          </p>
                          <p className="mt-2 text-sm font-medium text-ink">
                            {experience.stack}
                          </p>
                        </div>

                        {experience.illustration && (
                          <motion.img
                            key={experience.illustration}
                            src={experience.illustration}
                            alt=""
                            width="1254"
                            height="1254"
                            loading="lazy"
                            draggable="false"
                            className="mx-auto mt-3 max-h-[12rem] w-auto select-none mix-blend-multiply md:mt-0 md:max-h-[15rem]"
                            initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: 2 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{
                              delay: reduceMotion ? 0 : 0.1,
                              type: 'spring',
                              stiffness: 180,
                              damping: 21,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
