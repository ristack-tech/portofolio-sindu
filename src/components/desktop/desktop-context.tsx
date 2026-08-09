'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { APPS, getApp, type AppId } from './apps'

export interface WindowRect {
  x: number
  y: number
  width: number
  height: number
}

export interface WindowState {
  appId: AppId
  rect: WindowRect
  zIndex: number
  minimized: boolean
  maximized: boolean
  prevRect: WindowRect | null
}

export const ACCENTS = [
  { name: 'orange', value: '#e95420', hover: '#ff6b35' },
  { name: 'purple', value: '#77216f', hover: '#8e2a85' },
  { name: 'blue', value: '#0053b3', hover: '#1a66c4' },
] as const

interface DesktopContextValue {
  windows: WindowState[]
  isDesktop: boolean
  accent: (typeof ACCENTS)[number]
  cycleAccent: () => void
  openApp: (id: AppId) => void
  closeWindow: (id: AppId) => void
  focusWindow: (id: AppId) => void
  minimizeWindow: (id: AppId) => void
  toggleMaximize: (id: AppId) => void
  moveWindow: (id: AppId, x: number, y: number) => void
  resizeWindow: (id: AppId, width: number, height: number) => void
  showDesktop: () => void
  isOpen: (id: AppId) => boolean
}

const DesktopContext = createContext<DesktopContextValue | null>(null)

let zCounter = 1
let cascadeOffset = 0

function defaultRectFor(appId: AppId): WindowRect {
  const { defaultSize } = getApp(appId)
  if (typeof window === 'undefined') {
    return { x: 80, y: 60, width: defaultSize.width, height: defaultSize.height }
  }
  const maxX = Math.max(40, window.innerWidth - defaultSize.width - 100)
  const maxY = Math.max(40, window.innerHeight - defaultSize.height - 100)
  const x = Math.min(maxX, 90 + cascadeOffset)
  const y = Math.min(maxY, 56 + cascadeOffset)
  cascadeOffset = (cascadeOffset + 28) % 200
  return { x, y, width: defaultSize.width, height: defaultSize.height }
}

export function DesktopProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [isDesktop, setIsDesktop] = useState(true)
  const [accentIndex, setAccentIndex] = useState(0)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    const mq = window.matchMedia('(min-width: 820px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // "Change Accent" (right-click menu) updates the CSS variables every
  // component reads via var(--color-accent) / var(--color-accent-hover).
  useEffect(() => {
    const accent = ACCENTS[accentIndex]
    document.documentElement.style.setProperty('--color-accent', accent.value)
    document.documentElement.style.setProperty('--color-accent-hover', accent.hover)
  }, [accentIndex])

  const openApp = useCallback((id: AppId) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.appId === id)
      if (existing) {
        return prev.map((w) =>
          w.appId === id ? { ...w, minimized: false, zIndex: ++zCounter } : w
        )
      }
      return [
        ...prev,
        { appId: id, rect: defaultRectFor(id), zIndex: ++zCounter, minimized: false, maximized: false, prevRect: null },
      ]
    })
  }, [])

  const closeWindow = useCallback((id: AppId) => {
    setWindows((prev) => prev.filter((w) => w.appId !== id))
  }, [])

  const focusWindow = useCallback((id: AppId) => {
    setWindows((prev) => prev.map((w) => (w.appId === id ? { ...w, zIndex: ++zCounter, minimized: false } : w)))
  }, [])

  const minimizeWindow = useCallback((id: AppId) => {
    setWindows((prev) => prev.map((w) => (w.appId === id ? { ...w, minimized: true } : w)))
  }, [])

  const toggleMaximize = useCallback((id: AppId) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.appId !== id) return w
        if (w.maximized) {
          return { ...w, maximized: false, rect: w.prevRect ?? w.rect, prevRect: null }
        }
        return { ...w, maximized: true, prevRect: w.rect }
      })
    )
  }, [])

  const moveWindow = useCallback((id: AppId, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.appId === id ? { ...w, rect: { ...w.rect, x, y } } : w)))
  }, [])

  const resizeWindow = useCallback((id: AppId, width: number, height: number) => {
    setWindows((prev) => prev.map((w) => (w.appId === id ? { ...w, rect: { ...w.rect, width, height } } : w)))
  }, [])

  const showDesktop = useCallback(() => {
    setWindows((prev) => prev.map((w) => ({ ...w, minimized: true })))
  }, [])

  const isOpen = useCallback((id: AppId) => windows.some((w) => w.appId === id), [windows])

  const cycleAccent = useCallback(() => {
    setAccentIndex((i) => (i + 1) % ACCENTS.length)
  }, [])

  const value = useMemo<DesktopContextValue>(
    () => ({
      windows,
      isDesktop,
      accent: ACCENTS[accentIndex],
      cycleAccent,
      openApp,
      closeWindow,
      focusWindow,
      minimizeWindow,
      toggleMaximize,
      moveWindow,
      resizeWindow,
      showDesktop,
      isOpen,
    }),
    [windows, isDesktop, accentIndex, cycleAccent, openApp, closeWindow, focusWindow, minimizeWindow, toggleMaximize, moveWindow, resizeWindow, showDesktop, isOpen]
  )

  return <DesktopContext.Provider value={value}>{children}</DesktopContext.Provider>
}

export function useDesktop() {
  const ctx = useContext(DesktopContext)
  if (!ctx) throw new Error('useDesktop must be used within DesktopProvider')
  return ctx
}

export { APPS }
