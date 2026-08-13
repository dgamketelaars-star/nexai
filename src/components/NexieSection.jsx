import { Bot, MessageCircle, Sparkles } from 'lucide-react'

export default function NexieSection({ onOpenChat }) {
  return (
    <section id="nexie" className="border-t border-[var(--border-subtle)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle-dark)]
            bg-gradient-to-br from-[var(--bg-navy)] to-[var(--bg-navy-2)] px-6 py-12 shadow-xl shadow-slate-900/10 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full bg-brand-cyan/15 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-brand-purple/20 blur-[90px]" />

          <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                <Sparkles size={13} />
                Niet zeker waar te beginnen?
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary-dark)] sm:text-4xl">
                Vraag het Nexie!
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--text-secondary-dark)] sm:text-lg lg:mx-0">
                Staat wat je zoekt er niet tussen of weet je niet precies waar je moet beginnen? Vertel Nexie wat je
                wilt maken, oplossen of makkelijker wilt maken.
              </p>
              <button
                type="button"
                onClick={onOpenChat}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple
                  px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.03] cursor-pointer"
              >
                <MessageCircle size={16} />
                Vraag het Nexie
              </button>
            </div>

            <div className="flex w-full justify-center lg:w-1/2">
              <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 blur-2xl" />
                <div
                  className="relative flex h-full w-full animate-[float_6s_ease-in-out_infinite] items-center justify-center
                    rounded-full border border-white/12 bg-white/5 shadow-2xl backdrop-blur-sm"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple shadow-lg sm:h-28 sm:w-28">
                    <Bot size={52} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
