/* eslint-disable react/prop-types -- this project does not use PropTypes; props are internal. */
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const VIEW_W = 640
const VIEW_H = 400
const TARGET_ID = 'b5'

const BUILDINGS = [
  { id: 'A', x: 29, y: 147, right: 151, bottom: 374 },
  { id: 'B', x: 164, y: 55, right: 326, bottom: 374 },
  { id: 'C', x: 334, y: 117, right: 528, bottom: 374 },
  { id: 'D', x: 536, y: 201, right: 620, bottom: 374 },
]

const SPOTS = [
  { id: 'a1', b: 'A', type: 'window', x: 52, y: 172, w: 26, h: 30 },
  { id: 'a2', b: 'A', type: 'window', x: 96, y: 172, w: 26, h: 30 },
  { id: 'a3', b: 'A', type: 'window', x: 52, y: 222, w: 26, h: 30 },
  { id: 'a4', b: 'A', type: 'window', x: 96, y: 222, w: 26, h: 30 },
  { id: 'a5', b: 'A', type: 'window', x: 52, y: 272, w: 26, h: 30 },
  { id: 'a6', b: 'A', type: 'window', x: 96, y: 272, w: 26, h: 30 },
  { id: 'ad', b: 'A', type: 'door', x: 74, y: 318, w: 36, h: 54 },
  { id: 'b1', b: 'B', type: 'window', x: 186, y: 88, w: 28, h: 32 },
  { id: 'b2', b: 'B', type: 'window', x: 230, y: 88, w: 28, h: 32 },
  { id: 'b3', b: 'B', type: 'window', x: 274, y: 88, w: 28, h: 32 },
  { id: 'b4', b: 'B', type: 'window', x: 186, y: 140, w: 28, h: 32 },
  { id: 'b5', b: 'B', type: 'window', x: 230, y: 140, w: 28, h: 32 },
  { id: 'b6', b: 'B', type: 'window', x: 274, y: 140, w: 28, h: 32 },
  { id: 'b7', b: 'B', type: 'window', x: 186, y: 192, w: 28, h: 32 },
  { id: 'b8', b: 'B', type: 'window', x: 230, y: 192, w: 28, h: 32 },
  { id: 'b9', b: 'B', type: 'window', x: 274, y: 192, w: 28, h: 32 },
  { id: 'b10', b: 'B', type: 'window', x: 186, y: 244, w: 28, h: 32 },
  { id: 'b11', b: 'B', type: 'window', x: 230, y: 244, w: 28, h: 32 },
  { id: 'b12', b: 'B', type: 'window', x: 274, y: 244, w: 28, h: 32 },
  { id: 'bd', b: 'B', type: 'door', x: 226, y: 314, w: 44, h: 58 },
  { id: 'c1', b: 'C', type: 'window', x: 356, y: 146, w: 28, h: 32 },
  { id: 'c2', b: 'C', type: 'window', x: 400, y: 146, w: 28, h: 32 },
  { id: 'c3', b: 'C', type: 'window', x: 444, y: 146, w: 28, h: 32 },
  { id: 'c4', b: 'C', type: 'window', x: 484, y: 146, w: 24, h: 32 },
  { id: 'c5', b: 'C', type: 'window', x: 356, y: 198, w: 28, h: 32 },
  { id: 'c6', b: 'C', type: 'window', x: 400, y: 198, w: 28, h: 32 },
  { id: 'c7', b: 'C', type: 'window', x: 444, y: 198, w: 28, h: 32 },
  { id: 'c8', b: 'C', type: 'window', x: 484, y: 198, w: 24, h: 32 },
  { id: 'c9', b: 'C', type: 'window', x: 356, y: 250, w: 28, h: 32 },
  { id: 'c10', b: 'C', type: 'window', x: 400, y: 250, w: 28, h: 32 },
  { id: 'c11', b: 'C', type: 'window', x: 444, y: 250, w: 28, h: 32 },
  { id: 'c12', b: 'C', type: 'window', x: 484, y: 250, w: 24, h: 32 },
  { id: 'cd', b: 'C', type: 'door', x: 404, y: 318, w: 38, h: 54 },
  { id: 'd1', b: 'D', type: 'window', x: 552, y: 226, w: 24, h: 28 },
  { id: 'd2', b: 'D', type: 'window', x: 586, y: 226, w: 24, h: 28 },
  { id: 'd3', b: 'D', type: 'window', x: 552, y: 270, w: 24, h: 28 },
  { id: 'd4', b: 'D', type: 'window', x: 586, y: 270, w: 24, h: 28 },
  { id: 'dd', b: 'D', type: 'door', x: 566, y: 324, w: 26, h: 48 },
]

const HITBOXES = (() => {
  const byId = Object.fromEntries(BUILDINGS.map((b) => [b.id, b]))
  return SPOTS.map((spot) => {
    const building = byId[spot.b]
    const peers = SPOTS.filter((o) => o.b === spot.b && o.id !== spot.id)
    const windows = peers.filter((o) => o.type === 'window')
    let x0 = building.x + 1
    let x1 = building.right - 1
    let y0 = building.y + 1
    let y1 = building.bottom - 1
    const left = windows.filter((o) => o.x + o.w <= spot.x + 0.5)
    const right = windows.filter((o) => o.x >= spot.x + spot.w - 0.5)
    const above = peers.filter((o) => o.y + o.h <= spot.y + 0.5)
    const below = peers.filter((o) => o.y >= spot.y + spot.h - 0.5)
    if (left.length) x0 = Math.max(...left.map((o) => (o.x + o.w + spot.x) / 2))
    if (right.length) x1 = Math.min(...right.map((o) => (o.x + spot.x + spot.w) / 2))
    if (above.length) y0 = Math.max(...above.map((o) => (o.y + o.h + spot.y) / 2))
    if (below.length) y1 = Math.min(...below.map((o) => (o.y + spot.y + spot.h) / 2))
    if (spot.type === 'door') {
      x0 = building.x + 1
      x1 = building.right - 1
      y1 = building.bottom - 1
    }
    return { ...spot, hx: x0, hy: y0, hw: x1 - x0, hh: y1 - y0 }
  })
})()

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'nduujanadi51@gmail.com',
    href: 'mailto:nduujanadi51@gmail.com',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: '+62 895-3594-55245',
    href: 'https://wa.me/62895359455245',
    external: true,
  },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Sinduaditya' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sinduadityajanadi' },
  { label: 'Email', href: 'mailto:nduujanadi51@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/62895359455245' },
]

const pct = (value, total) => `${((value / total) * 100).toFixed(3)}%`

const doorPath = (spot) => {
  const r = spot.w / 2
  const bottom = spot.y + spot.h
  return `M${spot.x} ${bottom} L${spot.x} ${spot.y + r} A${r} ${r} 0 0 1 ${spot.x + spot.w} ${spot.y + r} L${spot.x + spot.w} ${bottom} Z`
}

const ink = '#0a0a0a'

function Skyline({ activeId, unlocked }) {
  const isHot = (id) => activeId === id
  const target = SPOTS.find((spot) => spot.id === TARGET_ID)

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <g
        fill="none"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 377 C 130 373, 330 381, 634 375" strokeWidth="2.8" />
        <path d="M40 386 l12 7 M150 389 l12 7 M300 391 l12 7 M460 388 l12 7 M580 389 l12 7" />
        <path d="M38 72 a13 12 0 0 1 16 -13 a15 13 0 0 1 27 3 a11 10 0 0 1 9 10 Z" />
        <path d="M548 96 a11 10 0 0 1 13 -11 a13 11 0 0 1 22 3 a9 9 0 0 1 8 8 Z" />
        <path d="M210 36 l7 -6 l7 6 M234 27 l6 -5 l6 5" />
        <path d="M14 373 q4 -9 8 0 M528 373 q4 -8 8 0 M534 373 q5 -10 10 0" />
      </g>

      <g fill="#ffffff" stroke={ink} strokeWidth="3" strokeLinejoin="round">
        <path d="M33 151 L147 147 L149 372 L31 373 Z" />
        <path d="M168 62 L320 57 L322 372 L166 373 Z" />
        <path d="M338 124 L522 119 L524 372 L336 373 Z" />
        <path d="M540 207 L614 203 L616 372 L538 373 Z" />
      </g>

      <g
        fill="none"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M60 146 L58 126 L94 124 L96 145" fill="#ffffff" />
        <path d="M64 133 h24 M66 146 v5 M88 146 v5" />
        <path d="M246 58 L246 24" />
        <path d="M252 32 q7 5 7 12 M240 32 q-7 5 -7 12" />
        <circle cx="246" cy="20" r="3.4" fill="#ffffff" />
        <path d="M360 116 v-20 h64 v18" fill="#ffffff" />
        <path d="M366 104 h44 M366 110 h30" />
        <path d="M496 120 L495 104 L508 103 L509 119" fill="#ffffff" />
        <path d="M502 97 q6 -6 0 -12 q-6 -6 0 -12" />
        <path d="M596 204 L595 190 L607 189 L608 203" fill="#ffffff" />
        <path d="M601 182 q5 -6 0 -11" />
      </g>

      <g>
        {SPOTS.filter((spot) => spot.type === 'window').map((spot) => {
          const hot = isHot(spot.id)
          const isTarget = spot.id === TARGET_ID
          return (
            <g key={spot.id}>
              <rect
                x={spot.x}
                y={spot.y}
                width={spot.w}
                height={spot.h}
                rx="2"
                fill={
                  unlocked && isTarget
                    ? '#fdf1d6'
                    : hot
                      ? '#fafafa'
                      : '#ffffff'
                }
                stroke={ink}
                strokeWidth={hot ? 3 : 2.2}
              />
              <line
                x1={spot.x - 2}
                y1={spot.y + spot.h + 3}
                x2={spot.x + spot.w + 2}
                y2={spot.y + spot.h + 3}
                stroke={ink}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>
          )
        })}
      </g>

      <g>
        {SPOTS.filter((spot) => spot.type === 'door').map((spot) => (
          <g key={spot.id}>
            <path
              d={doorPath(spot)}
              fill={isHot(spot.id) ? '#fafafa' : '#ffffff'}
              stroke={ink}
              strokeWidth={isHot(spot.id) ? 3 : 2.4}
              strokeLinejoin="round"
            />
            <circle
              cx={spot.x + spot.w - 8}
              cy={spot.y + spot.h - 20}
              r="2.4"
              fill={ink}
            />
          </g>
        ))}
      </g>

      {unlocked && (
        <g transform={`translate(${target.x + target.w + 12} ${target.y - 16})`}>
          <path
            d="M0 10 L4 0 L8 10 L0 4 L8 4 Z"
            fill="#e8a317"
            stroke={ink}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </g>
      )}
    </svg>
  )
}

const revealGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const revealItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ContactSection() {
  const reduceMotion = useReducedMotion()
  const [status, setStatus] = useState('searching')
  const [misses, setMisses] = useState(0)
  const [missId, setMissId] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const missTimer = useRef(null)
  const spotRefs = useRef([])

  useEffect(() => () => window.clearTimeout(missTimer.current), [])

  const unlocked = status !== 'searching'

  useEffect(() => {
    if (unlocked) setActiveId(null)
  }, [unlocked])

  const statusMessage =
    status === 'found'
      ? 'Found me — the direct line is open.'
      : status === 'gave-up'
        ? 'No worries — here it is anyway.'
        : misses > 0
          ? 'Not this one. Keep looking.'
          : 'One window hides a tiny picture of me.'

  const counterLabel =
    status === 'found'
      ? '1 / 1 found'
      : status === 'gave-up'
        ? 'skipped'
        : misses > 0
          ? `${misses} miss${misses > 1 ? 'es' : ''}`
          : '0 / 1 found'

  const handleSpotClick = (spot, index) => {
    setActiveIndex(index)
    if (unlocked) return
    if (spot.id === TARGET_ID) {
      window.clearTimeout(missTimer.current)
      setMissId(null)
      setStatus('found')
      return
    }
    setMisses((count) => count + 1)
    setMissId(spot.id)
    window.clearTimeout(missTimer.current)
    missTimer.current = window.setTimeout(() => setMissId(null), 400)
  }

  const handleGroupKeyDown = (event) => {
    if (unlocked) return
    const total = SPOTS.length
    let next = activeIndex
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = (activeIndex + 1) % total
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = (activeIndex - 1 + total) % total
    } else if (event.key === 'Home') {
      next = 0
    } else if (event.key === 'End') {
      next = total - 1
    } else {
      return
    }
    event.preventDefault()
    setActiveIndex(next)
    spotRefs.current[next]?.focus()
  }

  const target = SPOTS.find((spot) => spot.id === TARGET_ID)

  return (
    <motion.section
      id="contact"
      className="shell scroll-mt-24 pb-20 sm:pb-24"
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealGroup}
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
        <motion.div className="md:col-span-5" variants={revealItem}>
          <h2 className="max-w-[15ch] font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
            Have something interesting to build?
          </h2>

          <AnimatePresence mode="wait" initial={false}>
            {!unlocked ? (
              <motion.div
                key="locked"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
              >
                <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-ink-soft">
                  Somewhere in those buildings there is a tiny picture of me.
                  Find the right window and my direct contact opens.
                </p>
                <motion.button
                  type="button"
                  onClick={() => setStatus('gave-up')}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-press transition-colors duration-200 hover:border-ink"
                  whileHover={reduceMotion ? undefined : { x: 1, y: -2 }}
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { x: 3, y: 3 }
                  }
                  transition={{ type: 'spring', stiffness: 430, damping: 24 }}
                >
                  I give up — show the contact
                  <span aria-hidden="true">↗</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.4 }}
              >
                <motion.a
                  href="mailto:nduujanadi51@gmail.com"
                  className="group mt-6 inline-flex items-baseline gap-2 font-display text-[clamp(2rem,4.5vw,3.1rem)] font-semibold tracking-[-0.04em] text-ember-dark transition-colors duration-200 hover:text-ember"
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={reduceMotion
                    ? { duration: 0 }
                    : { delay: 0.12, type: 'spring', stiffness: 240, damping: 20 }}
                >
                  Let&apos;s talk.
                  <span
                    className="text-[0.55em] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </motion.a>

                <ul className="mt-7 space-y-4">
                  {CONTACT_LINKS.map((item) => (
                    <li key={item.label} className="flex flex-wrap items-baseline gap-x-4">
                      <span className="w-[5.5rem] shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="group inline-flex min-h-11 items-center gap-1.5 break-all text-[0.95rem] font-medium text-ink"
                      >
                        <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                          {item.value}
                        </span>
                        <span
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-end justify-between gap-4">
                  <p className="max-w-[30ch] text-sm leading-relaxed text-ink-soft">
                    No form in between — these open straight in your own mail or
                    messaging app.
                  </p>
                  <img
                    src="/illustrations/face-laugh.png"
                    alt=""
                    width="1254"
                    height="1254"
                    loading="lazy"
                    draggable="false"
                    className="w-20 shrink-0 select-none mix-blend-multiply sm:w-24"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p
            role="status"
            aria-live="polite"
            className="mt-5 min-h-[1.25rem] font-mono text-[0.75rem] leading-relaxed text-ink-soft"
          >
            {statusMessage}
          </p>
        </motion.div>

        <motion.div className="md:col-span-7" variants={revealItem}>
          <div className="overflow-hidden rounded-[14px] border border-line bg-white">
            <div className="relative aspect-[16/10] w-full">
              <Skyline activeId={activeId} unlocked={unlocked} />

              {unlocked && (
                <motion.img
                  src="/illustrations/face-laugh.png"
                  alt=""
                  width="1254"
                  height="1254"
                  draggable="false"
                  className="pointer-events-none absolute z-10 select-none object-contain mix-blend-multiply"
                  style={{
                    left: pct(target.x - (target.w * 0.7) / 2, VIEW_W),
                    top: pct(target.y - (target.h * 0.7) / 2, VIEW_H),
                    width: pct(target.w * 1.7, VIEW_W),
                    height: pct(target.h * 1.7, VIEW_H),
                  }}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={reduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 260, damping: 17, delay: 0.05 }}
                />
              )}

              <div
                role="group"
                aria-label="City skyline — one window hides a small picture"
                className="absolute inset-0"
                onKeyDown={handleGroupKeyDown}
              >
                {HITBOXES.map((spot, index) => (
                  <button
                    key={spot.id}
                    ref={(element) => {
                      spotRefs.current[index] = element
                    }}
                    type="button"
                    disabled={unlocked}
                    tabIndex={index === activeIndex ? 0 : -1}
                    aria-label={`${spot.type === 'door' ? 'Door' : 'Window'} ${index + 1} of ${HITBOXES.length}`}
                    onFocus={() => !unlocked && setActiveId(spot.id)}
                    onBlur={() => setActiveId((current) => (current === spot.id ? null : current))}
                    onMouseEnter={() => !unlocked && setActiveId(spot.id)}
                    onMouseLeave={() =>
                      setActiveId((current) => (current === spot.id ? null : current))
                    }
                    onClick={() => handleSpotClick(spot, index)}
                    className={`absolute rounded-sm transition-colors duration-150 ${
                      missId === spot.id ? 'spot-miss' : ''
                    }`}
                    style={{
                      left: pct(spot.hx, VIEW_W),
                      top: pct(spot.hy, VIEW_H),
                      width: pct(spot.hw, VIEW_W),
                      height: pct(spot.hh, VIEW_H),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.14em]">
            <span className="text-ink-soft">
              {unlocked ? 'the tiny me' : 'find the tiny me'}
            </span>
            <span
              className={
                status === 'searching' ? 'text-ink-soft' : 'text-ember-dark'
              }
            >
              {counterLabel}
            </span>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
              Rather skip the hunt?
            </p>
            <nav
              className="mt-3 flex flex-wrap gap-x-7 gap-y-1"
              aria-label="Social links"
            >
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
