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
              I&apos;m an Informatics student who tends to end up somewhere between
              backend systems, IoT, infrastructure, and project ownership.
            </p>

            <p className="mt-7 max-w-[58ch] text-base leading-relaxed text-ink-soft sm:text-lg">
              I started in software engineering and now spend most of my time turning
              complicated operational needs into systems people can actually rely on.
              I care about the decisions behind the code: how it scales, how a team can
              maintain it, and whether it solves the real problem.
            </p>
          </div>

          <motion.div
            className="relative ml-auto h-[16rem] w-[16rem] md:h-[19rem] md:w-[19rem] lg:h-[22rem] lg:w-[22rem]"
            initial={reduceMotion ? false : { opacity: 0, x: 24, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={reduceMotion ? undefined : { rotate: 2, y: -2 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 145, damping: 19 }}
          >
            <img
              src="/illustrations/half-about.png"
              alt=""
              width="1254"
              height="1254"
              loading="lazy"
              draggable="false"
              className="h-full w-full select-none object-contain mix-blend-multiply"
            />
            <motion.span
              className="absolute right-[4%] top-[18%] font-mono text-sm text-ember-dark"
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : 0.3, type: 'spring', stiffness: 260, damping: 18 }}
            >
              *
            </motion.span>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:items-start lg:ml-[12%] lg:max-w-[44rem]">
          <motion.span
            className="pt-3 font-display text-2xl text-amber-dark"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, x: -8, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduceMotion ? 0 : 0.15, type: 'spring', stiffness: 260, damping: 20 }}
          >
            ↘
          </motion.span>

          <div className="rounded-lg bg-surface px-5 py-5 sm:px-6">
            <p className="font-mono text-[0.7rem] text-ink-soft">CURRENT</p>
            <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-ink sm:text-base">
              I&apos;m leading FIK-Apps, working as a Research Assistant at Nexa IoT
              Lab, and building products with ristack.tech.
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
