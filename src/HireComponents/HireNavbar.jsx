import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Process', href: '#process' },
  { name: 'What you get', href: '#features' },
  { name: 'Contact', href: '#contact' },
]

export default function HireNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const anchors = navigation.filter((item) => item.href.startsWith('#'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = anchors.find((item) => item.href === `#${entry.target.id}`)
            if (match) setActive(match.name)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    anchors.forEach((item) => {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigationClick = (event, href) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="md:sticky z-40 top-6 mt-6 flex flex-col justify-center items-center px-5 sm:px-8">
      <header className="bg-paper/75 max-w-shell backdrop-blur-xl border border-line/80 shadow-lift rounded-2xl w-full z-50">
        <nav className="flex items-center justify-between px-5 py-4 sm:px-7" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="group -m-1.5 p-1.5 rounded-lg">
              <span className="sr-only">Sindu Aditya — home</span>
              <span className="font-display text-xl font-semibold tracking-tight text-ink group-hover:text-ember transition-colors duration-200">
                Sindu<span className="text-ember">.</span>
              </span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-ink-soft hover:text-ember hover:bg-ember-wash transition duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-9">
            {navigation.map((item) => {
              const isActive = active === item.name
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative text-[0.95rem] leading-6 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:text-ember hover:after:w-full ${
                    isActive ? 'text-ember after:w-full' : 'text-ink-soft'
                  }`}
                  onClick={(event) => handleNavigationClick(event, item.href)}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://tally.so/r/wLpGWy"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-ember px-4 py-2 text-sm font-medium text-paper shadow-press transition duration-200 hover:bg-ember-dark active:scale-[0.98]"
            >
              Book a call <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm" aria-hidden="true" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-paper px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-line">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Sindu Aditya — home</span>
                <span className="font-display text-xl font-semibold tracking-tight text-ink">
                  Sindu<span className="text-ember">.</span>
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-ink-soft hover:text-ember hover:bg-ember-wash transition duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-line">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 transition duration-200 hover:bg-ember-wash hover:text-ember ${
                        active === item.name ? 'text-ember' : 'text-ink'
                      }`}
                      onClick={(event) => handleNavigationClick(event, item.href)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://tally.so/r/wLpGWy"
                    target="_blank"
                    rel="noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-ink transition duration-200 hover:bg-ember-wash hover:text-ember"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
