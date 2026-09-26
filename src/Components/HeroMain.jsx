import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const revealItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroMain() {
  const [isLaughing, setIsLaughing] = useState(false)
  const laughTimer = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => () => window.clearTimeout(laughTimer.current), [])

  const handleNavigationClick = (event, target) => {
    const element = document.querySelector(target)
    if (!element) return

    event.preventDefault()
    element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const laughForAMoment = () => {
    window.clearTimeout(laughTimer.current)
    setIsLaughing(true)
    laughTimer.current = window.setTimeout(() => setIsLaughing(false), 1400)
  }

  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden border-b border-line bg-white py-10 sm:py-14 lg:py-16">
      <motion.div
        className="shell grid items-center gap-8 md:grid-cols-12 md:gap-8 lg:gap-10"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: reduceMotion ? 0 : 0.09 },
          },
        }}
      >
        <div className="relative z-10 md:col-span-7">
          <motion.p
            variants={revealItem}
            className="flex items-center gap-3 text-sm font-medium text-ink-soft"
          >
            <motion.span
              className="h-2 w-2 shrink-0 bg-ember"
              aria-hidden="true"
              initial={reduceMotion ? false : { scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 420, damping: 20 }}
            />
            Semarang, Indonesia · available for interesting work
          </motion.p>

          <motion.h1
            variants={revealItem}
            className="mt-6 max-w-[13ch] font-display text-[clamp(2.7rem,6.2vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-ink"
          >
            I build systems that make complicated things feel{' '}
            <span className="relative inline-block">
              simple.
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-ember"
                initial={reduceMotion ? false : { scaleX: 0, rotate: -1 }}
                animate={{ scaleX: 1, rotate: -1 }}
                transition={{ delay: reduceMotion ? 0 : 0.62, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={revealItem}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Backend-focused Informatics student building APIs, IoT infrastructure,
            and products that make complex systems easier to use.
          </motion.p>

          <motion.div
            variants={revealItem}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="#work"
              onClick={(event) => handleNavigationClick(event, '#work')}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-ink bg-ember px-5 py-2.5 text-sm font-semibold text-ink shadow-press"
              whileHover={reduceMotion ? undefined : { x: 1, y: -2 }}
              whileTap={reduceMotion ? undefined : { x: 3, y: 3, boxShadow: '0 0 0 #0a0a0a' }}
              transition={{ type: 'spring', stiffness: 430, damping: 24 }}
            >
              Explore my work
            </motion.a>
            <motion.a
              href="https://github.com/Sinduaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-semibold text-ink"
              whileHover={reduceMotion ? undefined : { x: 2 }}
            >
              GitHub
              <span
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </motion.a>
          </motion.div>

          <motion.p
            variants={revealItem}
            className="mt-8 max-w-[13rem] border-t border-line pt-4 font-mono text-[0.72rem] leading-relaxed text-ink-soft sm:max-w-[20rem] sm:text-[0.78rem] md:max-w-none"
          >
            LARAVEL / POSTGRESQL / DOCKER / IOT / REACT
          </motion.p>
        </div>

        <motion.div
          className="absolute -bottom-3 right-[-2.75rem] w-[14rem] sm:right-[-1rem] sm:w-[17rem] md:relative md:bottom-auto md:right-auto md:col-span-5 md:mx-auto md:w-full md:max-w-[24rem] lg:max-w-[28rem]"
          initial={reduceMotion ? false : { opacity: 0, x: 28, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 0.48,
            type: 'spring',
            stiffness: 115,
            damping: 17,
          }}
        >
          <motion.span
            aria-hidden="true"
            className="absolute right-1 top-[17%] z-10 rotate-6 font-mono text-[0.68rem] text-ink-soft sm:right-0"
            initial={reduceMotion ? false : { opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.9 }}
          >
            hover me :)
          </motion.span>

          <button
            type="button"
            className="relative block aspect-square w-full rounded-[16px] focus-visible:ring-offset-4"
            aria-label="Ubah ekspresi karakter Sindu"
            aria-pressed={isLaughing}
            onPointerEnter={() => setIsLaughing(true)}
            onPointerLeave={() => setIsLaughing(false)}
            onFocus={() => setIsLaughing(true)}
            onBlur={() => setIsLaughing(false)}
            onClick={laughForAMoment}
          >
            <motion.img
              src="/illustrations/face-shy.png"
              alt=""
              width="1254"
              height="1254"
              fetchPriority="high"
              draggable="false"
              className="absolute inset-0 h-full w-full select-none object-contain"
              animate={{ opacity: isLaughing ? 0 : 1, scale: isLaughing && !reduceMotion ? 0.98 : 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            />
            <motion.img
              src="/illustrations/face-laugh.png"
              alt=""
              width="1254"
              height="1254"
              draggable="false"
              className="absolute inset-0 h-full w-full select-none object-contain"
              initial={false}
              animate={{ opacity: isLaughing ? 1 : 0, scale: isLaughing && !reduceMotion ? [0.98, 1.02, 1] : 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
            />
          </button>

          <motion.span
            aria-hidden="true"
            className="absolute bottom-[19%] left-[6%] font-display text-2xl text-ember"
            animate={
              isLaughing && !reduceMotion
                ? { rotate: [0, -12, 8, 0], scale: [0.8, 1.15, 1] }
                : { rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.35 }}
          >
            *
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
