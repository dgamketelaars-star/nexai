import { ArrowRight } from 'lucide-react'

export default function Intro() {
  return (
    <section id="over" className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
          Over NexAI
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          NexAI bouwt praktische digitale en AI-oplossingen voor ondernemers en kleine organisaties.
          Van iets dat technisch vastloopt tot complete systemen en slimme automatisering.
        </p>
        <a
          href="#over"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-cyan"
        >
          Meer over NexAI
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
