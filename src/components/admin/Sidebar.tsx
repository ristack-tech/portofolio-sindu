'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'DASHBOARD', icon: '▪' },
  { href: '/admin/projects', label: 'PROJECTS', icon: '▪' },
  { href: '/admin/experiences', label: 'EXPERIENCE', icon: '▪' },
  { href: '/admin/skills', label: 'SKILLS', icon: '▪' },
  { href: '/admin/settings', label: 'SETTINGS', icon: '▪' },
  { href: '/admin/messages', label: 'MESSAGES', icon: '▪' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 bg-black text-white min-h-screen border-r-[4px] border-black flex flex-col">
      <div className="p-6 border-b-[4px] border-white/10">
        <Link href="/admin" className="font-display text-2xl font-extrabold">SA.</Link>
        <p className="font-mono text-xs text-[#727785] mt-1">ADMIN PANEL</p>
      </div>

      <nav className="flex flex-col p-4 gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = item.href === '/admin'
            ? pathname === '/admin'
            : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 font-mono text-xs font-bold tracking-widest transition-colors border-[2px] ${
                isActive
                  ? 'bg-[#0058be] text-white border-[#0058be]'
                  : 'text-[#727785] border-transparent hover:text-white hover:border-white/10'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t-[4px] border-white/10">
        <Link href="/" className="font-mono text-xs text-[#727785] hover:text-white transition-colors">
          ← LIHAT PORTFOLIO
        </Link>
      </div>
    </aside>
  )
}
