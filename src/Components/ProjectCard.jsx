/* eslint-disable react/prop-types -- this project does not use PropTypes. */
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function ProjectCard({ project, index, isOpen, onToggle }) {
  const [imageIndex, setImageIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const detailId = `${project.id}-detail`
  const image = project.images?.[imageIndex]

  return (
    <motion.article
      layout={!reduceMotion}
      whileHover={reduceMotion || isOpen ? undefined : { y: -3 }}
      transition={{ layout: { type: 'spring', stiffness: 260, damping: 32 } }}
      className={`${isOpen ? 'md:col-span-6 border-ember bg-ember-wash/40' : `${project.span} border-line bg-white hover:border-line-strong hover:shadow-hard`} min-w-0 overflow-hidden border transition-[border-color,box-shadow] duration-200`}
    >
      <button
        type="button"
        className="group block w-full text-left"
        aria-expanded={isOpen}
        aria-controls={detailId}
        onClick={onToggle}
      >
        <span className="flex min-h-11 items-center justify-between border-b border-line px-5 py-2 font-mono text-[0.7rem] text-ink-soft sm:px-6">
          <span>{String(index + 1).padStart(2, '0')} / {project.type}</span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center text-ink" aria-hidden="true">
            {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
          </span>
        </span>

        <span className="block px-5 pb-5 pt-6 sm:px-6">
          <span className="block font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-[-0.035em] text-ink">
            {project.name}
          </span>
          <span className="mt-2 block max-w-[42ch] text-sm leading-relaxed text-ink-soft">
            {project.summary}
          </span>
        </span>

        {!isOpen && project.images && (
          <span className={`block border-t border-line bg-surface ${project.size === 'wide' ? 'h-48 md:h-56' : 'h-48 md:h-44'}`}>
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              loading="lazy"
              className="h-full w-full object-contain object-top"
            />
          </span>
        )}

        {!isOpen && project.modules && (
          <span className="grid grid-cols-2 gap-x-5 gap-y-0 border-t border-line px-5 py-4 sm:px-6">
            {project.modules.map((module, moduleIndex) => (
              <span key={module} className="border-b border-line py-3 text-sm text-ink">
                <span className="mr-2 font-mono text-[0.7rem] text-ink-soft">0{moduleIndex + 1}</span>
                {module}
              </span>
            ))}
          </span>
        )}

        {!isOpen && project.illustration && (
          <span className="flex h-48 items-end justify-end border-t border-line pr-6 sm:h-52">
            <img
              src={project.illustration}
              alt=""
              loading="lazy"
              width="1254"
              height="1254"
              className="h-44 w-44 object-contain object-bottom mix-blend-multiply sm:h-48 sm:w-48"
            />
          </span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={detailId}
            key="detail"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-8 border-t border-line px-5 py-6 sm:px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12 md:py-8"
          >
            {project.images ? (
              <div className="min-w-0">
                <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border border-line bg-white">
                   <motion.img
                     key={image.src}
                     src={image.src}
                     alt={image.alt}
                     loading="lazy"
                     className="h-full w-full object-contain"
                     initial={reduceMotion ? false : { opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: reduceMotion ? 0 : 0.18 }}
                   />
                </div>
                <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={`${project.name} screenshots`}>
                  {project.images.map((shot, shotIndex) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setImageIndex(shotIndex)}
                      aria-label={`Show ${project.name} image ${shotIndex + 1}: ${shot.alt}`}
                      aria-pressed={imageIndex === shotIndex}
                      className={`h-14 w-[4.5rem] overflow-hidden border bg-white p-0.5 transition-colors sm:h-16 sm:w-24 ${imageIndex === shotIndex ? 'border-ember' : 'border-line hover:border-line-strong'}`}
                    >
                      <img src={shot.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex min-h-48 items-center justify-center border-y border-line bg-white/70 px-6 py-7">
                {project.illustration ? (
                  <img
                    src={project.illustration}
                    alt=""
                    loading="lazy"
                    width="1254"
                    height="1254"
                    className="max-h-64 w-auto object-contain mix-blend-multiply"
                  />
                ) : (
                  <div className="w-full max-w-sm">
                    <p className="font-mono text-xs text-ink-soft">PT Lims Yanwo Indonesia</p>
                    <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-[-0.035em] text-ink">
                      Quality Control / Inventory / Attendance / Payroll
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex min-w-0 flex-col">
              <div className="space-y-5 text-sm leading-relaxed">
                <div>
                  <h3 className="font-mono text-[0.7rem] text-ink-soft">CONTEXT</h3>
                  <p className="mt-1 text-ink">{project.context}</p>
                </div>
                <div>
                  <h3 className="font-mono text-[0.7rem] text-ink-soft">MY PART</h3>
                  <p className="mt-1 text-ink">{project.contribution}</p>
                </div>
                {project.outcome && (
                  <div>
                    <h3 className="font-mono text-[0.7rem] text-ink-soft">SCOPE / RECOGNITION</h3>
                    <p className="mt-1 text-ink">{project.outcome}</p>
                  </div>
                )}
              </div>

              <dl className="mt-7 border-t border-line pt-5 text-sm">
                <div>
                  <dt className="font-mono text-[0.7rem] text-ink-soft">ROLE</dt>
                  <dd className="mt-1 font-medium text-ink">{project.role}</dd>
                </div>
                {project.stack && (
                  <div className="mt-4">
                    <dt className="font-mono text-[0.7rem] text-ink-soft">STACK</dt>
                    <dd className="mt-1 font-medium text-ink">{project.stack}</dd>
                  </div>
                )}
              </dl>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex min-h-11 w-max items-center gap-2 text-sm font-semibold text-ink underline decoration-ember decoration-2 underline-offset-4 md:mt-auto md:pt-5"
                >
                  View project
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
