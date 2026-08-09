'use client'

import { useState, type FormEvent } from 'react'
import { SITE } from '@/lib/site-content'

type Line = { text: string; isCommand?: boolean }

const HELP_TEXT = [
  'Perintah yang tersedia:',
  '  about     - ringkas tentang saya',
  '  contact   - cara menghubungi saya',
  '  whoami    - siapa saya',
  '  clear     - bersihkan terminal',
  '  help      - tampilkan pesan ini lagi',
]

function runCommand(cmd: string): string[] {
  const normalized = cmd.trim().toLowerCase()
  switch (normalized) {
    case 'help':
      return HELP_TEXT
    case 'about':
      return [SITE.aboutHeading + ' ' + SITE.aboutHeadingAccent, '', SITE.aboutParagraphs[0]]
    case 'contact':
      return [`Email : ${SITE.email}`, `WhatsApp : ${SITE.whatsappDisplay}`, `LinkedIn : ${SITE.socialLinkedin}`, `GitHub : ${SITE.socialGithub}`]
    case 'whoami':
      return [SITE.fullName, SITE.heroBadge]
    case '':
      return []
    default:
      return [`command not found: ${normalized} (coba 'help')`]
  }
}

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([
    { text: `${SITE.fullName} — terminal` },
    { text: "ketik 'help' untuk daftar perintah" },
  ])
  const [input, setInput] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const cmd = input
    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([])
      setInput('')
      return
    }
    const output = runCommand(cmd)
    setHistory((prev) => [
      ...prev,
      { text: cmd, isCommand: true },
      ...output.map((text) => ({ text })),
    ])
    setInput('')
  }

  return (
    <div className="h-full flex flex-col bg-[#1a1a1a] text-[#d4d4d4] font-mono text-sm p-4">
      <div className="flex-1 overflow-y-auto gnome-scroll space-y-1">
        {history.map((line, i) => (
          <div key={i}>
            {line.isCommand ? (
              <span>
                <span className="text-[var(--color-accent)]">sindu@portfolio</span>
                <span className="text-[#d4d4d4]">:~$ </span>
                {line.text}
              </span>
            ) : (
              <span className="text-[#b8b8b8] whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2 shrink-0">
        <span className="text-[var(--color-accent)]">sindu@portfolio</span>
        <span>:~$</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-[#d4d4d4]"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  )
}
