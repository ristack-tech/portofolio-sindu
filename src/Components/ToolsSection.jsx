import { motion, useReducedMotion } from 'motion/react'

const groups = [
  {
    title: 'Backend',
    tools: ['Laravel', 'PHP', 'REST APIs', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Frontend',
    tools: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Infrastructure',
    tools: ['Linux', 'VPS migration', 'Docker', 'cPanel'],
  },
  {
    title: 'Other',
    tools: ['MQTT', 'Mosquitto', 'Laravel Reverb', 'WebSockets', 'Git'],
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
         <div>
          <h2 className="max-w-[8ch] font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
            I work with
          </h2>
           <span className="mt-5 block w-max rotate-3 font-display text-2xl text-ember-dark" aria-hidden="true">
             →
           </span>
         </div>

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
                     <span className="group inline-flex cursor-default items-center py-0.5 text-ink-soft transition-colors duration-200 hover:text-ink">
                      <span className="bg-[linear-gradient(#0a0a0a,#0a0a0a)] bg-[length:0_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
                        {tool}
                      </span>
                     </span>
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
