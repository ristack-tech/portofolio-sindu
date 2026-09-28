import { motion, useReducedMotion } from 'motion/react'

const recognitions = [
  {
    year: '2025',
    rank: '3rd',
    title: 'HITECH',
    context: 'Ethereum-based decentralized e-voting',
  },
  {
    year: '2024',
    rank: '2nd',
    title: 'IT FEST · IPB',
  },
  {
    year: '2024',
    rank: 'Top 10',
    title: 'ECOTHON ASEAN',
    context: 'Klora · recycling and sustainability',
  },
  {
    year: '2024',
    rank: '3rd',
    title: 'DINACOM',
    context: 'Ethereum-based decentralized e-voting',
  },
]

export default function Awards() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="awards" className="shell scroll-mt-24 pb-24 sm:pb-32">
      <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-ink">
        Awards &amp; recognition
      </h2>

      <section aria-labelledby="scholarship-title" className="mt-10 border-y border-line sm:mt-12">
        <div className="grid items-center gap-3 sm:grid-cols-[minmax(0,1fr)_15rem] sm:gap-8 md:grid-cols-[minmax(0,1fr)_19rem]">
          <motion.div
            className="pt-8 sm:py-12"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
             transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[0.72rem] text-ink-soft">
              SCHOLARSHIP / 2025–2026
            </p>
            <h3 id="scholarship-title" className="mt-5 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-ink">
              Beswan Djarum 41
            </h3>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-soft">
              Selected for Djarum Beasiswa Plus, cohort 41, for the 2025/2026 academic year.
            </p>
          </motion.div>

          <motion.img
            src="/illustrations/half-proud.png"
            alt=""
            width="1254"
            height="1254"
            loading="lazy"
            draggable="false"
            className="mx-auto h-44 w-44 select-none object-contain mix-blend-multiply sm:h-60 sm:w-60 md:h-[19rem] md:w-[19rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
             transition={{ delay: reduceMotion ? 0 : 0.12, duration: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </section>

      <section aria-labelledby="recognition-title" className="mt-16 sm:mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h3 id="recognition-title" className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold tracking-[-0.035em] text-ink">
            Competition recognition
          </h3>
          <span className="font-mono text-[0.72rem] text-ink-soft">
            {String(recognitions.length).padStart(2, '0')} RECORDS
          </span>
        </div>

        <ol className="mt-7 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {recognitions.map((recognition, index) => (
            <li
              key={`${recognition.year}-${recognition.title}`}
              className={`flex min-h-[13rem] flex-col border-b border-line px-1 py-6 sm:px-5 lg:border-b-0 lg:px-6 ${index % 2 === 1 ? 'sm:border-l' : ''} ${index > 1 ? 'lg:border-l' : ''}`}
            >
              <span className="flex items-center justify-between font-mono text-[0.7rem] text-ink-soft">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{recognition.year}</span>
              </span>
              <p className="mt-7 font-display text-[clamp(1.65rem,2.8vw,2.3rem)] font-semibold leading-none tracking-[-0.045em] text-ink">
                {recognition.rank}
              </p>
              <h4 className="mt-2 font-display text-base font-semibold tracking-[-0.02em] text-ink">
                {recognition.title}
              </h4>
              {recognition.context && (
                <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-ink-soft">
                  {recognition.context}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}
