import { motion, useReducedMotion } from 'motion/react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Sinduaditya' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sinduadityajanadi' },
  { label: 'Email', href: 'mailto:nduujanadi51@gmail.com' },
]

export default function AboutMe() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="shell scroll-mt-24 overflow-hidden pb-24 sm:pb-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-ink">
          About me
        </h2>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_17rem] lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          <div>
            <p className="max-w-[25ch] font-display text-[clamp(1.65rem,3.6vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.04em] text-ink">
              I study Informatics at Universitas Dian Nuswantoro and work across
              backend development, IoT systems, and project coordination.
            </p>

            <p className="mt-7 max-w-[58ch] text-base leading-relaxed text-ink-soft sm:text-lg">
              My work spans academic platforms, fleet management, and internal business
              tools. I like figuring out what a team actually needs, then building the
              parts that make the day-to-day work easier.
            </p>
          </div>

           <div className="relative ml-auto h-[16rem] w-[16rem] md:h-[19rem] md:w-[19rem] lg:h-[22rem] lg:w-[22rem]">
            <img
              src="/illustrations/half-about.png"
              alt=""
              width="1254"
              height="1254"
              loading="lazy"
              draggable="false"
              className="h-full w-full select-none object-contain mix-blend-multiply"
            />
             <span
               className="absolute right-[4%] top-[18%] font-mono text-sm text-ember-dark"
               aria-hidden="true"
             >
               *
             </span>
           </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:items-start lg:ml-[12%] lg:max-w-[44rem]">
           <span className="pt-3 font-display text-2xl text-amber-dark" aria-hidden="true">
             ↘
           </span>

          <div className="rounded-lg bg-surface px-5 py-5 sm:px-6">
            <p className="font-mono text-[0.7rem] text-ink-soft">CURRENT</p>
            <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-ink sm:text-base">
              I&apos;m working on a digital village website at Firstudio and building
              business applications with RISTACK.
            </p>
          </div>
        </div>

        <nav className="mt-9 flex flex-wrap gap-x-7 gap-y-2" aria-label="Social links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink"
            >
              <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                {social.label}
              </span>
              <span
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </nav>
      </motion.div>
    </section>
  )
}
