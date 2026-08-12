import { ArrowRight } from 'lucide-react'

const ACCENTS = {
  purple: {
    badge: 'from-violet-500 to-brand-purple',
    glow: 'bg-violet-500/25',
    text: 'text-violet-400',
    ring: 'group-hover:border-violet-400/60',
    ringOuter: 'border-violet-400/30',
    dot: 'bg-violet-400',
    chip: 'from-fuchsia-400 to-violet-500',
    tag: 'border-violet-400/30 text-violet-300',
  },
  blue: {
    badge: 'from-brand-blue to-brand-cyan',
    glow: 'bg-brand-blue/25',
    text: 'text-brand-cyan',
    ring: 'group-hover:border-brand-cyan/60',
    ringOuter: 'border-brand-cyan/30',
    dot: 'bg-brand-cyan',
    chip: 'from-brand-blue to-blue-400',
    tag: 'border-brand-cyan/30 text-brand-cyan',
  },
  emerald: {
    badge: 'from-emerald-500 to-teal-400',
    glow: 'bg-emerald-500/25',
    text: 'text-emerald-400',
    ring: 'group-hover:border-emerald-400/60',
    ringOuter: 'border-emerald-400/30',
    dot: 'bg-emerald-400',
    chip: 'from-teal-400 to-emerald-500',
    tag: 'border-emerald-400/30 text-emerald-300',
  },
}

export default function CategorySection({
  id,
  eyebrow,
  title,
  description,
  tags = [],
  ctaLabel,
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  accent = 'blue',
  reverse = false,
  surface = false,
}) {
  const a = ACCENTS[accent]

  return (
    <section
      id={id}
      className={`border-t border-[var(--border-subtle)] py-11 sm:py-16 ${surface ? 'bg-[var(--bg-surface)]' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`flex flex-col items-center gap-10 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          <div className="group relative w-full lg:w-1/2">
            <div className={`pointer-events-none absolute inset-10 rounded-full blur-[70px] ${a.glow}`} />
            <div
              className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-3xl
                border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] transition-colors ${a.ring}`}
            >
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <span className={`absolute left-6 top-6 h-1.5 w-1.5 rounded-full ${a.dot}`} />
              <span className={`absolute bottom-7 right-8 h-2 w-2 rounded-full opacity-60 ${a.dot}`} />

              <div className="relative flex items-center justify-center">
                <div className={`absolute h-24 w-24 rounded-full border ${a.ringOuter} opacity-70 sm:h-28 sm:w-28`} />
                <div className={`absolute h-32 w-32 rounded-full border ${a.ringOuter} opacity-40 sm:h-36 sm:w-36`} />

                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-xl
                    ring-4 ring-white/10 sm:h-24 sm:w-24 ${a.badge}`}
                >
                  <Icon strokeWidth={1.6} className="h-9 w-9 text-white sm:h-10 sm:w-10" />
                </div>

                {SecondaryIcon && (
                  <div
                    className={`absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br
                      shadow-lg ring-2 ring-[var(--bg-surface-2)] ${a.chip}`}
                  >
                    <SecondaryIcon size={15} strokeWidth={2} className="text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${a.text}`}>{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>

            {tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${a.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <a
              href="#"
              className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${a.text} hover:opacity-80`}
            >
              {ctaLabel}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
