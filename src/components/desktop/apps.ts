import { User, Briefcase, IdCard, Clock, Mail, TerminalSquare, type LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Terminal from './Terminal'

export type AppId = 'overview' | 'work' | 'about' | 'experience' | 'contact' | 'terminal'

export interface AppDef {
  id: AppId
  title: string
  icon: LucideIcon
  Component: ComponentType
  defaultSize: { width: number; height: number }
  /** Included in the mobile bottom-nav and the SEO baseline (all apps are always in the dock). */
  onDesktop?: boolean
}

export const APPS: AppDef[] = [
  { id: 'overview', title: 'Overview', icon: IdCard, Component: Hero, defaultSize: { width: 720, height: 560 }, onDesktop: true },
  { id: 'work', title: 'Projects', icon: Briefcase, Component: Work, defaultSize: { width: 780, height: 600 }, onDesktop: true },
  { id: 'about', title: 'About Me', icon: User, Component: About, defaultSize: { width: 720, height: 600 }, onDesktop: true },
  { id: 'experience', title: 'Experience', icon: Clock, Component: Experience, defaultSize: { width: 740, height: 600 }, onDesktop: true },
  { id: 'contact', title: 'Contact', icon: Mail, Component: Contact, defaultSize: { width: 640, height: 480 }, onDesktop: true },
  { id: 'terminal', title: 'Terminal', icon: TerminalSquare, Component: Terminal, defaultSize: { width: 640, height: 420 }, onDesktop: false },
]

export function getApp(id: AppId): AppDef {
  const app = APPS.find((a) => a.id === id)
  if (!app) throw new Error(`Unknown app id: ${id}`)
  return app
}
