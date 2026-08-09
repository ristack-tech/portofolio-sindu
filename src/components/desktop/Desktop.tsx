'use client'

import { useEffect, useState } from 'react'
import { DesktopProvider, useDesktop } from './desktop-context'
import { APPS, type AppId } from './apps'
import TopBar from './TopBar'
import Dock from './Dock'
import ContextMenu from './ContextMenu'
import Window from './Window'

const VALID_APP_IDS: AppId[] = APPS.map((a) => a.id)
const WALLPAPER_URL = '/ubuntu-22-04-jammy-jellyfish-wallpaper-800x450.jpg'

function DesktopSurface() {
  const { windows, isDesktop, openApp } = useDesktop()
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null)

  // Support deep links like "/#work" from the standalone /projects pages.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as AppId
    if (VALID_APP_IDS.includes(hash)) {
      openApp(hash)
    } else {
      openApp('overview')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isDesktop) {
    return <MobileView />
  }

  return (
    <div
      className="flex-1 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
      onContextMenu={(e) => {
        e.preventDefault()
        setMenu({ x: e.clientX, y: e.clientY })
      }}
      onClick={() => menu && setMenu(null)}
    >
      {windows.map((w) => (
        <Window key={w.appId} win={w} />
      ))}

      {menu && <ContextMenu x={menu.x} y={menu.y} onClose={() => setMenu(null)} />}
    </div>
  )
}

const OVERVIEW_APP = APPS.find((a) => a.id === 'overview')!

function MobileView() {
  const { windows, openApp } = useDesktop()
  const active = windows.length > 0 ? windows.reduce((a, b) => (b.zIndex > a.zIndex ? b : a)) : null
  // Always fall back to Overview instead of a blank state — there should
  // never be a moment where mobile shows nothing but "pick a menu below".
  const app = (active ? APPS.find((a) => a.id === active.appId) : null) ?? OVERVIEW_APP

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="h-11 shrink-0 flex items-center gap-2 px-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <app.icon size={16} className="text-[var(--color-accent)]" />
        <span className="text-sm font-medium">{app.title}</span>
      </div>
      <div className="flex-1 overflow-y-auto gnome-scroll bg-[var(--color-bg)]">
        <app.Component />
      </div>
      <nav className="shrink-0 grid grid-cols-5 border-t border-[var(--color-border)] bg-[var(--color-surface)] py-1.5">
        {APPS.filter((a) => a.onDesktop).map((a) => {
          const Icon = a.icon
          const isActive = app.id === a.id
          return (
            <button
              key={a.id}
              onClick={() => openApp(a.id)}
              className={`flex flex-col items-center gap-1 py-1.5 text-[10px] leading-none ${
                isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              <Icon size={18} />
              <span className="truncate w-full text-center px-0.5">{a.title}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

/** All app content rendered once, hidden, so crawlers/no-JS clients see full text
 *  regardless of which windows happen to be open in the interactive shell. */
function SeoBaseline() {
  return (
    <div className="hidden">
      {APPS.filter((a) => a.onDesktop).map((a) => (
        <a.Component key={a.id} />
      ))}
    </div>
  )
}

export default function Desktop() {
  return (
    <DesktopProvider>
      <div className="h-screen flex flex-col bg-[var(--color-bg)] text-white">
        <TopBar />
        <div className="flex-1 flex min-h-0">
          <DesktopBody />
        </div>
      </div>
      <SeoBaseline />
    </DesktopProvider>
  )
}

function DesktopBody() {
  const { isDesktop } = useDesktop()
  return (
    <>
      {isDesktop && <Dock />}
      <DesktopSurface />
    </>
  )
}
