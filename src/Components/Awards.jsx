import { motion, useReducedMotion } from 'motion/react'

const recognitions = [
  {
    year: '2025',
    title: '3rd Place · HITECH',
    issuer: '[DUMMY] Add organizer name',
    context: 'Blockchain e-voting with NFT-based vote verification.',
    type: 'COMPETITION',
  },
  {
    year: '2024',
    title: '2nd Place · IT FEST',
    issuer: 'IPB University',
    context: 'Klora · reward-based recycling platform.',
    type: 'COMPETITION',
  },
  {
    year: '2024',
    title: 'Top 10 · ECOTHON ASEAN',
    issuer: '[DUMMY] Add organizer name',
    context: 'Klora · sustainability solution.',
    type: 'REGIONAL',
  },
  {
    year: '2024',
    title: '3rd Place · DINACOM',
    issuer: '[DUMMY] Add organizer name',
    context: 'Decentralized blockchain e-voting system.',
    type: 'COMPETITION',
  },
]

export default function Awards() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="awards" className="shell scroll-mt-24 pb-24 sm:pb-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-ink">
          Awards &amp; recognition
        </h2>
        <p className="mt-2 text-base text-ink-soft">
          A few milestones worth keeping.
        </p>
      </motion.div>

      <motion.article
        className="relative mt-12 border-y border-line bg-surface px-5 py-7 sm:px-8 sm:py-8"
        initial={reduceMotion ? false : { opacity: 0, y: 10, rotate: -0.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      >
        <motion.span
          className="absolute -top-4 right-5 flex h-8 w-8 items-center justify-center bg-amber-soft font-display text-xl font-semibold text-ember-dark sm:right-8"
          aria-hidden="true"
          initial={reduceMotion ? false : { scale: 0, rotate: -18 }}
          whileInView={{ scale: 1, rotate: 4 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : 0.18, type: 'spring', stiffness: 330, damping: 18 }}
        >
          *
        </motion.span>

        <div className="grid gap-6 md:grid-cols-[8rem_minmax(0,1fr)_auto] md:items-start">
          <div>
            <p className="font-mono text-[0.7rem] text-ember-dark">SCHOLARSHIP</p>
            <p className="mt-1 font-mono text-[0.7rem] text-ink-soft">COHORT 41</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
              Beswan Djarum 41
            </h3>
            <p className="mt-1 text-sm text-ink-soft">Djarum Foundation</p>
            <p className="mt-4 max-w-[58ch] font-mono text-[0.78rem] leading-relaxed text-ink-soft">
              [DUMMY] Add the selection scope, program period, and the part of the
              scholarship experience that matters most.
            </p>
          </div>

          <span className="w-max border-b border-ember pb-1 font-mono text-[0.7rem] text-ink">
            CURRENT
          </span>
        </div>
      </motion.article>

      <div className="mt-14 flex items-baseline justify-between gap-5">
        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
          Recognition archive
        </h3>
        <span className="font-mono text-[0.7rem] text-ink-soft">
          {recognitions.length} ENTRIES
        </span>
      </div>

      <ol className="mt-5 border-t border-line">
        {recognitions.map((recognition, index) => (
          <motion.li
            key={`${recognition.year}-${recognition.title}`}
            className="group grid gap-3 border-b border-line px-2 py-6 transition-colors duration-200 hover:bg-surface sm:px-3 md:grid-cols-[6rem_minmax(0,1fr)_7rem] md:items-baseline md:gap-6"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              delay: reduceMotion ? 0 : index * 0.045,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="font-mono text-[0.75rem] text-ink-soft">
              {recognition.year}
            </span>

            <div className="min-w-0">
              <h4 className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-ink transition-transform duration-200 group-hover:translate-x-0.5">
                {recognition.title}
              </h4>
              <p
                className={`mt-1 text-sm ${
                  recognition.issuer.startsWith('[DUMMY]')
                    ? 'font-mono text-[0.75rem] text-ink-soft'
                    : 'text-ink-soft'
                }`}
              >
                {recognition.issuer}
              </p>
              <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-ink-soft">
                {recognition.context}
              </p>
            </div>

            <span className="font-mono text-[0.68rem] text-ink-soft md:text-right">
              {recognition.type}
            </span>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
