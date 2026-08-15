import { Bot } from 'lucide-react'
import { CTA_CLASSES } from './ServiceCard'

export default function NexieSection({ onOpenChat }) {
  return (
    <div
      id="nexie"
      className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle-dark)]
        bg-gradient-to-br from-[var(--bg-navy)] to-[var(--bg-navy-2)] p-6 shadow-xl shadow-slate-900/10 sm:p-8"
    >
      <div className="pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full bg-brand-cyan/15 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-brand-purple/20 blur-[90px]" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* Visual: Nexie's own mascot — same footprint as the other cards' images, kept as its distinct signature */}
        <div className="flex shrink-0 justify-center lg:order-2 lg:w-2/5">
          <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 blur-2xl" />
            <div
              className="relative flex h-full w-full animate-[float_6s_ease-in-out_infinite] items-center justify-center
                rounded-full border border-white/12 bg-white/5 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple shadow-lg sm:h-24 sm:w-24">
                <Bot size={44} strokeWidth={1.5} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center lg:order-1 lg:flex-1 lg:text-left">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Vraag het Nexie!</h3>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-[var(--text-secondary-dark)] lg:mx-0 lg:max-w-none">
            Niet zeker waar je moet beginnen? Vertel Nexie wat je wilt maken, oplossen of makkelijker wilt maken —
            dan wijst Nexie je de weg naar FIX, BUILD of SMART.
          </p>

          <button type="button" onClick={onOpenChat} className={`mt-6 cursor-pointer ${CTA_CLASSES}`}>
            Vraag het Nexie
          </button>
        </div>
      </div>
    </div>
  )
}
