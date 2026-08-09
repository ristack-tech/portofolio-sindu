'use client'

import { useEffect, useRef } from 'react'
import { TerminalSquare, LayoutGrid, Palette, MonitorCog, FolderPlus } from 'lucide-react'
import { useDesktop } from './desktop-context'

interface Props {
  x: number
  y: number
  onClose: () => void
}

export default function ContextMenu({ x, y, onClose }: Props) {
  const { openApp, showDesktop, cycleAccent, accent } = useDesktop()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const items = [
    { icon: TerminalSquare, label: 'Open Terminal', action: () => openApp('terminal') },
    { icon: LayoutGrid, label: 'Show Desktop', action: showDesktop },
    { icon: Palette, label: `Change Accent (${accent.name})`, action: cycleAccent },
    { icon: FolderPlus, label: 'New Folder', disabled: true },
    { icon: MonitorCog, label: 'Display Settings', disabled: true },
  ]

  return (
    <div
      ref={ref}
      className="fixed z-[10000] w-56 gnome-card bg-[#2f2f2f] p-1.5 text-white text-sm"
      style={{ top: y, left: x }}
    >
      {items.map(({ icon: Icon, label, action, disabled }) => (
        <button
          key={label}
          disabled={disabled}
          onClick={() => {
            if (disabled) return
            action?.()
            onClose()
          }}
          className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left ${
            disabled ? 'text-[var(--color-text-muted)] opacity-50 cursor-not-allowed' : 'gnome-hover'
          }`}
        >
          <Icon size={14} />
          {label}
        </button>
      ))}
    </div>
  )
}
