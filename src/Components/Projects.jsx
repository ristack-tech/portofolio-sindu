import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import ProjectCard from './ProjectCard'
import fikAppsCover from '../Images/optimized/fikapps.webp'
import fikAppsSite from '../Images/optimized/fikapps2.webp'
import fikAppsDashboard from '../Images/optimized/fikapps3.webp'
import fleetTrackCover from '../Images/optimized/fleettrack2.webp'
import fleetTrackSite from '../Images/optimized/fleettrack1.webp'
import fleetTrackCases from '../Images/optimized/fleettrack3.webp'
import kloraCover from '../Images/optimized/klora1.webp'
import kloraLogin from '../Images/optimized/klora2.webp'
import kloraMobile from '../Images/optimized/klora3.webp'
import dolanRekCover from '../Images/optimized/dolanrek1.webp'
import dolanRekStories from '../Images/optimized/dolanrek2.webp'
import dolanRekChat from '../Images/optimized/dolanrek3.webp'

const projects = [
  {
    id: 'fik-apps',
    name: 'FIK-Apps',
    type: 'Academic systems',
    summary: 'An academic platform for the Faculty of Computer Science.',
    role: 'Full-Stack Developer & Project Manager',
    stack: 'Laravel · Next.js',
    context: 'Academic and administrative work across the faculty needs a connected system.',
    contribution: 'Led development of the multi-tenant platform, coordinated five modules, worked on backend/frontend integration, and supported VPS migration.',
    outcome: 'The work covered Final Projects, Alumni, Career Guidance, Internship, and Early Warning System modules.',
    href: 'https://dev-sti.dinus.id/',
    images: [
      { src: fikAppsCover, alt: 'FIK-Apps portal showing the academic applications' },
      { src: fikAppsDashboard, alt: 'FIK-Apps faculty dashboard' },
      { src: fikAppsSite, alt: 'Faculty of Computer Science website' },
    ],
    span: 'md:col-span-4',
    size: 'wide',
  },
  {
    id: 'fleettrack',
    name: 'FleetTrack',
    type: 'IoT · Fleet management',
    summary: 'Vehicle operations connected to live IoT data.',
    role: 'Backend / Full-Stack Developer',
    stack: 'Laravel · MQTT · Mosquitto · Laravel Reverb · WebSockets',
    context: 'A fleet management platform brings vehicle-related operational data together through IoT integration.',
    contribution: 'Develop backend functionality, integrate IoT data using MQTT and Mosquitto, and implement real-time communication with Laravel Reverb and WebSockets.',
    outcome: 'Backend and real-time communication support fleet monitoring and management.',
    href: 'https://staging.dieseltrack.site/',
    images: [
      { src: fleetTrackCover, alt: 'FleetTrack live map and vehicle list' },
      { src: fleetTrackCases, alt: 'FleetTrack case investigation interface' },
      { src: fleetTrackSite, alt: 'FleetTrack website showing its product interfaces' },
    ],
    span: 'md:col-span-2',
    size: 'narrow',
  },
  {
    id: 'klora',
    name: 'Klora',
    type: 'Recycling · Web & mobile',
    summary: 'A recycling platform built with a five-person team.',
    role: 'Core Team Lead',
    stack: 'Web · Mobile',
    context: 'A digital platform focused on recycling and environmental sustainability.',
    contribution: 'Led a five-person team, coordinated product development, and contributed to the web and mobile platform.',
    outcome: 'Klora reached the Top 10 at ECOTHON 2024 ASEAN.',
    images: [
      { src: kloraCover, alt: 'Klora recycling platform website' },
      { src: kloraMobile, alt: 'Three screens from the Klora mobile experience' },
      { src: kloraLogin, alt: 'Klora sign-in screen' },
    ],
    span: 'md:col-span-2',
    size: 'narrow',
  },
  {
    id: 'dolanrek',
    name: 'DolanRek',
    type: 'Web application',
    summary: 'A web application project in my portfolio.',
    role: 'Project Contributor',
    context: 'DolanRek is a web application developed as part of my software development project portfolio.',
    contribution: 'Contributed to the project as part of its development team.',
    images: [
      { src: dolanRekCover, alt: 'DolanRek website home page' },
      { src: dolanRekStories, alt: 'DolanRek stories page' },
      { src: dolanRekChat, alt: 'DolanRek trip-planning chat interface' },
    ],
    span: 'md:col-span-4',
    size: 'wide',
  },
  {
    id: 'business-suite',
    name: 'Business Management Suite',
    type: 'Internal business systems',
    summary: 'Four operational areas, one modular application.',
    role: 'Full-Stack Developer',
    stack: 'Laravel · PHP · MySQL · REST APIs',
    context: 'An internal application for PT Lims Yanwo Indonesia supports its operational processes.',
    contribution: 'Develop Laravel modules, work on backend and database integration, and support the workflows across the application.',
    outcome: 'Modules cover Quality Control, inventory, attendance, and payroll.',
    modules: ['Quality Control', 'Inventory', 'Attendance', 'Payroll'],
    span: 'md:col-span-3',
    size: 'text',
  },
  {
    id: 'e-voting',
    name: 'Decentralized E-Voting',
    type: 'Blockchain application',
    summary: 'An electronic voting project built on Ethereum.',
    role: 'Project Contributor',
    stack: 'Ethereum · Blockchain',
    context: 'A decentralized electronic voting application developed using blockchain technology.',
    contribution: 'Participated in the development of the Ethereum-based voting application.',
    outcome: 'The project earned 3rd place at HITECH 2025 and DINACOM 2024.',
    illustration: '/illustrations/half-coding.png',
    span: 'md:col-span-3',
    size: 'illustrated',
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <section id="work" className="shell scroll-mt-24 py-24 sm:py-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.035em] text-ink">
          Featured work
        </h2>
        <p className="mt-2 text-base text-ink-soft">
          A few things I&apos;ve been building.
        </p>
      </motion.div>

      <div className="mt-12 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.75rem] text-ink-soft">
        <span>{projects.length} PROJECTS</span>
        <span>SELECTED WORK</span>
      </div>

      <div className="mt-5 grid items-start gap-4 md:grid-cols-6 md:gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isOpen={activeProject === project.id}
            onToggle={() =>
              setActiveProject((current) =>
                current === project.id ? null : project.id,
              )
            }
          />
        ))}
      </div>

      <a
        href="https://github.com/Sinduaditya"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
      >
        GitHub
        <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
      </a>
    </section>
  )
}
