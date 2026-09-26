import { motion, useReducedMotion } from 'motion/react'

const groups = [
  {
    title: 'Backend',
    tools: ['Laravel', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Frontend',
    tools: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS'],
  },
  {
    title: 'Infrastructure',
    tools: ['Docker', 'Linux', 'CI/CD', 'Grafana'],
  },
  {
    title: 'Other',
    tools: ['IoT', 'MQTT', 'System Design', 'Git'],
  },
]

const groupVariants = {
  hidden: { opacity: 0, y: 9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.06,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function ToolsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="tools" className="shell scroll-mt-24 pb-24 sm:pb-32">
      <div className="grid gap-10 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-16 lg:gap-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="max-w-[8ch] font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
            I work with
          </h2>
          <motion.span
            className="mt-5 block w-max rotate-3 font-display text-2xl text-ember-dark"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, x: -7, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ delay: reduceMotion ? 0 : 0.2, type: 'spring', stiffness: 260, damping: 19 }}
          >
            →
          </motion.span>
        </motion.div>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              custom={index}
              variants={groupVariants}
              initial={reduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-1.5 gap-y-2 text-[0.95rem] leading-relaxed text-ink-soft">
                {group.tools.map((tool, toolIndex) => (
                  <li key={tool} className="inline-flex items-center">
                    <motion.span
                      className="group inline-flex cursor-default items-center gap-1 py-0.5 text-ink-soft transition-colors duration-200 hover:text-ink"
                      whileHover={reduceMotion ? undefined : { x: 2 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 27 }}
                    >
                      <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                        {tool}
                      </span>
                      <span
                        className="w-0 overflow-hidden text-amber-dark opacity-0 transition-all duration-200 group-hover:w-3 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </motion.span>
                    {toolIndex < group.tools.length - 1 && (
                      <span className="ml-1.5 text-ink-faint" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
