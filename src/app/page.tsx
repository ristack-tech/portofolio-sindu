import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getSiteSettings, getSiteStats, getExperiences, getSkillsGrouped, getPublishedProjects } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Sindu Aditya — Backend Engineer & Technical Project Lead',
  description: 'Backend engineer & technical project lead yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi — fleet IoT, ERP manufaktur, dan platform multi-tenant.',
  openGraph: {
    type: 'website',
    title: 'Sindu Aditya — Backend Engineer & Technical Project Lead',
    description: 'Backend engineer & technical project lead yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi — fleet IoT, ERP manufaktur, dan platform multi-tenant.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Sindu Aditya' }],
  },
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ sent?: string }> }) {
  const { sent } = await searchParams

  const [settings, stats, experiences, skills, projects] = await Promise.all([
    getSiteSettings().catch(() => null),
    getSiteStats().catch(() => []),
    getExperiences().catch(() => []),
    getSkillsGrouped().catch(() => []),
    getPublishedProjects().catch(() => []),
  ])

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0, #000 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 48px)',
        }}
      />
      <main className="relative z-10">
        <Header />
        <Hero settings={settings} stats={stats} />
        <Work projects={projects} />
        <About settings={settings} skills={skills} />
        <Experience experiences={experiences} />
        <Contact settings={settings} sent={sent === '1'} />
        <Footer />
      </main>
    </>
  )
}
