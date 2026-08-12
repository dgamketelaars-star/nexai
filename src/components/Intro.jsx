import { ArrowRight } from 'lucide-react'

export default function Intro() {
  return (
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16">
        <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          NexAI bouwt praktische digitale en AI-oplossingen voor ondernemers en kleine organisaties.
          Van iets dat technisch vastloopt tot complete systemen en slimme automatisering.
        </p>
        <a
          href="#over"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-cyan"
        >
          Meer over NexAI
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
