'use client'

import { useEffect, useState } from 'react'
import { Wifi, Volume2, BatteryFull, ChevronDown, LayoutGrid } from 'lucide-react'
import { APPS } from './apps'
import { useDesktop } from './desktop-context'

function useClock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function TopBar() {
  const now = useClock()
  const { windows, focusWindow, showDesktop } = useDesktop()
  const [activitiesOpen, setActivitiesOpen] = useState(false)

  const timeLabel = now
    ? now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    : '--:--'
  const dateLabel = now
    ? now.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })
    : ''

  return (
    <div className="h-8 shrink-0 flex items-center justify-between px-3 bg-[#1e1e1e] text-white text-xs relative z-[9999]">
      <div className="relative">
        <button
          onClick={() => setActivitiesOpen((v) => !v)}
          className="gnome-btn gnome-hover flex items-center gap-1.5 px-2 py-1 font-medium"
        >
          <LayoutGrid size={12} />
          Activities
          {windows.length > 0 && <span className="text-[var(--color-accent)]">({windows.length})</span>}
        </button>
        {activitiesOpen && (
          <div className="absolute top-full left-0 mt-1 w-56 gnome-card bg-[#2f2f2f] p-1.5 text-white z-[9999]">
            {windows.length === 0 ? (
              <p className="px-2 py-1.5 text-[var(--color-text-muted)]">Tidak ada window terbuka</p>
            ) : (
              windows.map((w) => {
                const app = APPS.find((a) => a.id === w.appId)!
                return (
                  <button
                    key={w.appId}
                    onClick={() => {
                      focusWindow(w.appId)
                      setActivitiesOpen(false)
                    }}
                    className="gnome-btn gnome-hover w-full flex items-center gap-2 px-2 py-1.5 text-left"
                  >
                    <app.icon size={13} className="text-[var(--color-accent)]" />
                    {app.title}
                    {w.minimized && <span className="text-[var(--color-text-muted)] ml-auto">min</span>}
                  </button>
                )
              })
            )}
            <button
              onClick={() => {
                showDesktop()
                setActivitiesOpen(false)
              }}
              className="gnome-btn gnome-hover w-full text-left px-2 py-1.5 mt-1 border-t border-[var(--color-border)] text-[var(--color-text-muted)]"
            >
              Show Desktop
            </button>
          </div>
        )}
      </div>

      <div className="font-medium tabular-nums absolute left-1/2 -translate-x-1/2">
        {dateLabel} {timeLabel}
      </div>

      <div className="flex items-center gap-2.5 text-[var(--color-text-muted)]">
        <Wifi size={13} />
        <Volume2 size={13} />
        <BatteryFull size={13} />
        <ChevronDown size={11} />
      </div>
    </div>
  )
}
