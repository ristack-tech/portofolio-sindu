/* eslint-disable react/prop-types -- this project does not use PropTypes. */
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRightIcon,
  DocumentTextIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

const starLabels = {
  situation: 'Situation',
  task: 'Task',
  action: 'Action',
  result: 'Result',
}

export default function ProjectCard({ project, index, isOpen, onToggle }) {
  const reduceMotion = useReducedMotion()
  const detailId = `${project.id}-detail`

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        layout: { type: 'spring', stiffness: 280, damping: 30 },
        delay: reduceMotion ? 0 : index * 0.045,
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`border-b transition-colors duration-200 ${
        isOpen ? 'border-ember bg-ember-wash/55' : 'border-line bg-white'
      }`}
    >
      <button
        type="button"
        className="group grid min-h-[5.75rem] w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-5 text-left transition-colors hover:bg-surface sm:grid-cols-[auto_minmax(0,1fr)_auto_auto] sm:px-3"
        aria-expanded={isOpen}
        aria-controls={detailId}
        onClick={onToggle}
      >
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white text-ink-soft"
          animate={reduceMotion ? undefined : { rotate: isOpen ? -3 : 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 24 }}
          aria-hidden="true"
        >
          <DocumentTextIcon className="h-[1.1rem] w-[1.1rem]" />
        </motion.span>

        <span className="min-w-0">
          <span className="block font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-ink transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[1.15rem]">
            {project.name}
          </span>
          <span className="mt-1 block truncate text-sm text-ink-soft">
            {project.role} · {project.summary}
          </span>
          <span className="mt-1 block font-mono text-[0.7rem] text-ink-soft sm:hidden">
            {project.year}
          </span>
        </span>

        <span className="hidden font-mono text-[0.75rem] text-ink-soft sm:block">
          {project.year}
        </span>

        <motion.span
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink"
          animate={reduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 360, damping: 25 }}
          aria-hidden="true"
        >
          {isOpen ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
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
            transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-[3.8rem] border-l border-line-strong pb-8 pl-5 pr-4 sm:ml-[4.25rem] sm:pl-7 sm:pr-8">
              <div
                className={
                  project.illustration
                    ? 'grid items-end gap-7 md:grid-cols-[minmax(0,1fr)_13rem]'
                    : ''
                }
              >
                <div>
                  <div className="relative space-y-6">
                    <span
                      className="absolute bottom-3 left-[0.7rem] top-3 w-px bg-line"
                      aria-hidden="true"
                    />
                    {Object.entries(project.star).map(([key, content], starIndex) => {
                      const isResult = key === 'result'

                      return (
                        <div key={key} className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-4">
                          <motion.span
                            className={`relative z-10 flex h-6 w-6 items-center justify-center bg-ember-wash font-mono text-[0.72rem] font-medium ${
                              isResult ? 'text-ember-dark' : 'text-ink-soft'
                            }`}
                            initial={reduceMotion ? false : { opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: reduceMotion ? 0 : starIndex * 0.045 }}
                            aria-hidden="true"
                          >
                            {key.charAt(0).toUpperCase()}
                          </motion.span>
                          <div>
                            <h3 className="text-sm font-semibold text-ink">
                              {starLabels[key]}
                            </h3>
                            <p
                              className={`mt-1 max-w-[60ch] text-sm leading-relaxed ${
                                content.startsWith('[DUMMY]')
                                  ? 'font-mono text-[0.78rem] text-ink-soft'
                                  : 'text-ink-soft'
                              }`}
                            >
                              {content}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <dl className="mt-8 grid gap-5 border-t border-line pt-5 sm:grid-cols-2">
                    <div>
                      <dt className="font-mono text-[0.68rem] text-ink-soft">ROLE</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.68rem] text-ink-soft">STACK</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{project.stack}</dd>
                    </div>
                  </dl>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline decoration-ember decoration-2 underline-offset-4"
                  >
                    View project
                    <ArrowUpRightIcon
                      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {project.illustration && (
                  <motion.img
                    src={project.illustration}
                    alt=""
                    width="913"
                    height="1024"
                    loading="lazy"
                    draggable="false"
                    className="mx-auto hidden max-h-[15rem] w-auto select-none grayscale contrast-105 md:block"
                    initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: 2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.12, type: 'spring', stiffness: 180, damping: 21 }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
