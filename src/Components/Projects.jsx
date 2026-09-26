import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'fik-apps',
    name: 'FIK-Apps / TOP FIK',
    summary: 'Multi-tenant academic platform',
    role: 'PM + Backend',
    year: '2026',
    stack: 'Laravel · PostgreSQL · Docker',
    star: {
      situation:
        'Beberapa proses akademik berjalan melalui sistem yang terpisah, sehingga alur kerja dan pengelolaan data belum konsisten.',
      task:
        'Membangun platform fakultas modular yang dapat melayani kebutuhan beberapa program studi dan divisi.',
      action:
        'Merancang arsitektur multi-tenant, membangun layanan backend, dan mengoordinasikan pengembangan lintas divisi.',
      result:
        '[DUMMY] Digunakan oleh XX program studi dan mempercepat proses administrasi sebesar XX%.',
    },
    href: 'https://dev-sti.dinus.id/',
    illustration: '/illustrations/half-proud-fik-apps.png',
  },
  {
    id: 'fleettrack',
    name: 'Nexa FleetTrack',
    summary: 'Real-time IoT fleet management',
    role: 'Backend + IoT',
    year: '2025–26',
    stack: 'Laravel · MQTT · WebSocket',
    star: {
      situation:
        'Data kendaraan dan perangkat IoT belum tersedia secara real-time dalam satu alur pemantauan.',
      task:
        'Membangun backend yang mampu menerima telemetry, menyimpan histori, dan mengirim pembaruan lokasi secara langsung.',
      action:
        'Mengintegrasikan MQTT, WebSocket, Laravel Reverb, dan penyimpanan time-series untuk alur data kendaraan.',
      result:
        '[DUMMY] Memproses XX event per menit dengan latency rata-rata XX ms.',
    },
    href: 'https://staging.dieseltrack.site/',
  },
  {
    id: 'fakultas-sync',
    name: 'fakultas-sync',
    summary: 'Reliable academic data synchronization',
    role: 'Infrastructure + DevOps',
    year: '2025',
    stack: 'Jobs · CI/CD · Observability',
    star: {
      situation:
        'Data dari beberapa layanan fakultas perlu disinkronkan tanpa menghasilkan duplikasi atau perubahan yang tidak konsisten.',
      task:
        'Membangun proses sinkronisasi yang aman, dapat diulang, dan mudah dipantau.',
      action:
        'Menerapkan idempotent jobs, validasi data, retry mechanism, logging, dan pipeline deployment.',
      result:
        '[DUMMY] Mengurangi pekerjaan sinkronisasi manual dari XX jam menjadi XX menit.',
    },
    href: 'https://github.com/Sinduaditya',
  },
  {
    id: 'iger',
    name: 'iGer',
    summary: '[DUMMY] Personal AI project',
    role: 'Personal + AI',
    year: '2025',
    stack: '[DUMMY] AI · API · Product',
    star: {
      situation:
        '[DUMMY] Jelaskan masalah pengguna atau proses yang menjadi alasan iGer dibuat.',
      task:
        '[DUMMY] Jelaskan tanggung jawab dan target utama dalam proyek.',
      action:
        '[DUMMY] Jelaskan pendekatan teknis, keputusan produk, serta teknologi yang digunakan.',
      result:
        '[DUMMY] Masukkan hasil, validasi pengguna, penggunaan, atau pembelajaran terukur.',
    },
    href: 'https://github.com/Sinduaditya',
  },
  {
    id: 'dolanrek',
    name: 'DolanRek',
    summary: 'AI-assisted East Java travel planning',
    role: 'Group Project',
    year: '2024',
    stack: 'React · Appwrite · AI',
    star: {
      situation:
        'Informasi destinasi dan perencanaan perjalanan Jawa Timur tersebar dan sulit disusun menjadi itinerary praktis.',
      task:
        'Membuat platform eksplorasi wisata dengan bantuan AI untuk menyusun perjalanan berdasarkan preferensi pengguna.',
      action:
        'Membangun pengalaman pencarian destinasi, travel stories, dan generator itinerary HaloReK AI.',
      result:
        '[DUMMY] Menghasilkan XX itinerary dan digunakan oleh XX pengguna selama pengujian.',
    },
    href: 'https://dolanrek.netlify.app/',
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <section id="work" className="shell scroll-mt-24 py-24 sm:py-32">
      <div className="flex items-end justify-between gap-6">
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

        <motion.div
          className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={reduceMotion ? undefined : { rotate: 3, y: -2 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          aria-hidden="true"
        >
          <img
            src="/illustrations/face-featured-work.png"
            alt=""
            width="1536"
            height="1024"
            loading="lazy"
            className="absolute left-1/2 top-1/2 w-[22rem] max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
            draggable="false"
          />
        </motion.div>
      </div>

      <div className="mt-12 flex items-center justify-between font-mono text-[0.75rem] text-ink-soft">
        <span>{projects.length} PROJECTS</span>
        <span>UPDATED 2026</span>
      </div>

      <div className="mt-4 border-t border-line">
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
        Browse the rest on GitHub
        <span
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    </section>
  )
}
