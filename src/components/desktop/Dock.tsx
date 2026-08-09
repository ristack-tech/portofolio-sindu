'use client'

import { APPS } from './apps'
import { useDesktop } from './desktop-context'

export default function Dock() {
  const { windows, openApp, focusWindow } = useDesktop()

  return (
    <div className="w-[72px] shrink-0 flex flex-col items-center gap-2 py-4 bg-[#1e1e1e]/95 border-r border-[var(--color-border)]">
      {APPS.map((app) => {
        const win = windows.find((w) => w.appId === app.id)
        const isOpen = !!win
        const Icon = app.icon
        return (
          <button
            key={app.id}
            aria-label={app.title}
            title={app.title}
            onClick={() => (isOpen ? focusWindow(app.id) : openApp(app.id))}
            className="gnome-btn gnome-hover relative w-11 h-11 flex items-center justify-center text-white"
          >
            <Icon size={20} />
            {isOpen && (
              <span
                className={`absolute -left-[7px] top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all ${
                  win.minimized ? 'h-1.5 bg-[var(--color-text-muted)]' : 'h-4 bg-[var(--color-accent)]'
                }`}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
