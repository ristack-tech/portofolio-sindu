import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'

const navigation = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Awards', href: '#awards' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#tools' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextScrolled = latest > 12
    setScrolled((current) => (current === nextScrolled ? current : nextScrolled))
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (!visibleEntry) return

        const match = navigation.find(
          (item) => item.href === `#${visibleEntry.target.id}`,
        )
        if (match) setActive(match.name)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    navigation.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigationClick = (event, href) => {
    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-white/90 backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <nav
        className="shell flex h-[4.5rem] items-center justify-between"
        aria-label="Global"
      >
        <a
          href="#top"
          onClick={(event) => handleNavigationClick(event, '#top')}
          className="group relative -m-2 rounded-lg p-2 font-display text-xl font-semibold tracking-[-0.04em] text-ink"
        >
          <span className="sr-only">Sindu Aditya, kembali ke atas</span>
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            Sindu
            <span className="text-ember">.</span>
          </motion.span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.name

            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
                onClick={(event) => handleNavigationClick(event, item.href)}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-ink transition-transform duration-200 group-hover:scale-x-100" />
                {isActive && (
                  <motion.span
                    layoutId={reduceMotion ? undefined : 'active-navigation-dot'}
                    className="absolute -bottom-[5px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ember"
                    transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ember-wash md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Buka menu utama</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <Dialog
        as="div"
        className="relative z-50 md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <motion.div
          className="fixed inset-0 bg-ink/20"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        />

        <Dialog.Panel
          as={motion.div}
          className="fixed inset-x-3 top-3 overflow-hidden rounded-[14px] border border-line-strong bg-white px-5 pb-7 pt-5 shadow-hard"
          initial={reduceMotion ? false : { opacity: 0, y: -18, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 330, damping: 27 }}
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="font-display text-xl font-semibold tracking-[-0.04em] text-ink">
              Sindu<span className="text-ember">.</span>
            </span>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ember-wash"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Tutup menu utama</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 grid">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex min-h-12 items-center justify-between border-b border-line px-1 font-display text-lg font-medium ${
                  active === item.name ? 'text-ember' : 'text-ink'
                }`}
                onClick={(event) => handleNavigationClick(event, item.href)}
              >
                {item.name}
                <span className="font-mono text-sm" aria-hidden="true">
                  {active === item.name ? '•' : '↘'}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-5 font-mono text-[0.72rem] text-ink-soft">
            SEMARANG · UTC+7 · AVAILABLE
          </p>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
