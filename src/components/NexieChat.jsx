import { useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'

const QUICK_OPTIONS = ['Ik wil iets laten bouwen', 'Er werkt iets niet', 'Ik wil werk automatiseren']

const MOCK_REPLY =
  'Dank je! Dit is nog een demo-chat zonder echte AI-koppeling — binnenkort helpt Nexie hier je verder op weg.'

export default function NexieChat({ isOpen, onOpen, onClose }) {
  const [messages, setMessages] = useState([
    { from: 'nexie', text: 'Hoi, ik ben Nexie 👋' },
    { from: 'nexie', text: 'Waar kan ik je mee helpen?' },
  ])
  const [draft, setDraft] = useState('')

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { from: 'user', text: trimmed }, { from: 'nexie', text: MOCK_REPLY }])
    setDraft('')
  }

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open Nexie chat"
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
          bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-xl shadow-brand-blue/30
          transition-transform hover:scale-105 sm:bottom-7 sm:right-7 cursor-pointer ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle size={24} strokeWidth={2} />
      </button>

      <div
        role="dialog"
        aria-hidden={!isOpen}
        aria-label="Nexie chat"
        className={`fixed bottom-5 right-5 z-50 flex h-[min(560px,calc(100vh-3rem))] w-[min(380px,calc(100vw-2.5rem))]
          origin-bottom-right flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)]
          bg-white shadow-2xl transition-all duration-200 sm:bottom-7 sm:right-7 ${
            isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
          }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Nexie</p>
              <p className="text-[11px] text-white/80">Meestal binnen enkele minuten online</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Sluit chat"
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 hover:bg-white/15 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.from === 'user'
                    ? 'rounded-br-sm bg-gradient-to-r from-brand-blue to-brand-cyan text-white'
                    : 'rounded-bl-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {messages.length === 2 && (
            <div className="flex flex-col gap-2 pt-1">
              {QUICK_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => sendMessage(option)}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2.5
                    text-left text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan cursor-pointer"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            sendMessage(draft)
          }}
          className="flex items-center gap-2 border-t border-[var(--border-subtle)] p-3"
        >
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Typ je bericht..."
            className="flex-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5
              text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-brand-cyan/60"
          />
          <button
            type="submit"
            aria-label="Verstuur bericht"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white cursor-pointer"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  )
}
