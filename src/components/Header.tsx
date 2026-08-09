'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f9]/95 backdrop-blur-sm border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="font-display text-2xl font-extrabold tracking-tight">SA.</a>
        <nav className="hidden md:flex gap-8">
          <a href="#work" className="font-mono text-xs font-bold tracking-widest hover:text-[#0058be] transition-colors relative group">WORK<span className="nav-underline"></span></a>
          <a href="#about" className="font-mono text-xs font-bold tracking-widest hover:text-[#0058be] transition-colors relative group">ABOUT<span className="nav-underline"></span></a>
          <a href="#experience" className="font-mono text-xs font-bold tracking-widest hover:text-[#0058be] transition-colors relative group">EXPERIENCE<span className="nav-underline"></span></a>
          <a href="#contact" className="font-mono text-xs font-bold tracking-widest hover:text-[#0058be] transition-colors relative group">CONTACT<span className="nav-underline"></span></a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border-[2px] border-black p-2 bg-white"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#f9f9f9] border-t-[4px] border-black">
          <nav className="flex flex-col p-6 gap-4">
            <a href="#work" onClick={() => setIsOpen(false)} className="font-mono text-sm font-bold tracking-widest hover:text-[#0058be] transition-colors py-2 border-b border-black">WORK</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="font-mono text-sm font-bold tracking-widest hover:text-[#0058be] transition-colors py-2 border-b border-black">ABOUT</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="font-mono text-sm font-bold tracking-widest hover:text-[#0058be] transition-colors py-2 border-b border-black">EXPERIENCE</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="font-mono text-sm font-bold tracking-widest hover:text-[#0058be] transition-colors py-2">CONTACT</a>
          </nav>
        </div>
      )}
    </header>
  )
}
