'use client'

import { useCallback, useRef } from 'react'
import { Minus, Square, X, Maximize2 } from 'lucide-react'
import { getApp } from './apps'
import { useDesktop, type WindowState } from './desktop-context'

const TOPBAR_H = 32
const DOCK_W = 72
const MIN_W = 320
const MIN_H = 240

export default function Window({ win }: { win: WindowState }) {
  const { appId, rect, zIndex, maximized } = win
  const { windows, closeWindow, focusWindow, minimizeWindow, toggleMaximize, moveWindow, resizeWindow } = useDesktop()
  const app = getApp(appId)
  const isActive = windows.length > 0 && windows.reduce((a, b) => (b.zIndex > a.zIndex ? b : a)).appId === appId
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null)
  const resizeRef = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null)

  const handleDragStart = useCallback(
    (e: React.PointerEvent) => {
      if (maximized) return
      focusWindow(appId)
      dragRef.current = { startX: e.clientX, startY: e.clientY, origX: rect.x, origY: rect.y }
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [appId, focusWindow, maximized, rect.x, rect.y]
  )

  const handleDragMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current) return
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      const nextX = Math.max(0, Math.min(window.innerWidth - DOCK_W - 60, dragRef.current.origX + dx))
      const nextY = Math.max(0, Math.min(window.innerHeight - TOPBAR_H - 40, dragRef.current.origY + dy))
      moveWindow(appId, nextX, nextY)
    },
    [appId, moveWindow]
  )

  const handleDragEnd = useCallback(() => {
    dragRef.current = null
  }, [])

  const handleResizeStart = useCallback(
    (e: React.PointerEvent) => {
      e.stopPropagation()
      focusWindow(appId)
      resizeRef.current = { startX: e.clientX, startY: e.clientY, origW: rect.width, origH: rect.height }
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [appId, focusWindow, rect.width, rect.height]
  )

  const handleResizeMove = useCallback(
    (e: React.PointerEvent) => {
      if (!resizeRef.current) return
      const dx = e.clientX - resizeRef.current.startX
      const dy = e.clientY - resizeRef.current.startY
      const nextW = Math.max(MIN_W, resizeRef.current.origW + dx)
      const nextH = Math.max(MIN_H, resizeRef.current.origH + dy)
      resizeWindow(appId, nextW, nextH)
    },
    [appId, resizeWindow]
  )

  const handleResizeEnd = useCallback(() => {
    resizeRef.current = null
  }, [])

  if (win.minimized) return null

  const style = maximized
    ? { top: TOPBAR_H, left: DOCK_W, right: 0, bottom: 0, zIndex }
    : { top: rect.y, left: rect.x, width: rect.width, height: rect.height, zIndex }

  const Icon = app.icon

  return (
    <div
      className={`absolute flex flex-col rounded-xl overflow-hidden border ${
        isActive ? 'border-[var(--color-border-strong)] shadow-[0_8px_24px_rgba(0,0,0,0.4)]' : 'border-[var(--color-border)] shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
      }`}
      style={style}
      onPointerDown={() => focusWindow(appId)}
    >
      <div
        className={`h-9 shrink-0 flex items-center justify-between px-3 select-none ${
          isActive ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-surface)]/70'
        } ${maximized ? '' : 'cursor-grab active:cursor-grabbing'}`}
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        onDoubleClick={() => toggleMaximize(appId)}
      >
        <div className="flex items-center gap-2 min-w-0">
          <Icon size={14} className="text-[var(--color-accent)] shrink-0" />
          <span className="text-xs font-medium truncate">{app.title}</span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            aria-label="Minimize"
            onClick={() => minimizeWindow(appId)}
            className="gnome-btn gnome-hover w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)]"
          >
            <Minus size={13} />
          </button>
          <button
            aria-label="Maximize"
            onClick={() => toggleMaximize(appId)}
            className="gnome-btn gnome-hover w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)]"
          >
            {maximized ? <Square size={11} /> : <Maximize2 size={11} />}
          </button>
          <button
            aria-label="Close"
            onClick={() => closeWindow(appId)}
            className="gnome-btn w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)] hover:!bg-[#e81123] hover:!text-white"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto gnome-scroll bg-[var(--color-bg)]">
        <app.Component />
      </div>

      {!maximized && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
          onPointerDown={handleResizeStart}
          onPointerMove={handleResizeMove}
          onPointerUp={handleResizeEnd}
        />
      )}
    </div>
  )
}
