import { ArrowRight } from 'lucide-react'

const ACCENTS = {
  deep: {
    badge: 'from-blue-900 to-brand-blue',
    glow: 'bg-blue-900/25',
    dot: 'bg-blue-300',
    ring: 'group-hover:border-brand-blue/50',
  },
  blue: {
    badge: 'from-brand-blue to-sky-400',
    glow: 'bg-brand-blue/20',
    dot: 'bg-sky-300',
    ring: 'group-hover:border-sky-400/50',
  },
  sky: {
    badge: 'from-sky-400 to-sky-200',
    glow: 'bg-sky-400/20',
    dot: 'bg-sky-200',
    ring: 'group-hover:border-sky-300/60',
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
  image,
  imageAlt,
  accent = 'blue',
  reverse = false,
  surface = false,
}) {
  const a = ACCENTS[accent]
  const bgClass = surface ? 'bg-[var(--bg-surface)]' : 'bg-[var(--bg-surface)] sm:bg-[var(--bg-app)]'

  return (
    <section id={id} className={`border-t border-[var(--border-subtle)] py-11 sm:py-16 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`flex flex-col items-center gap-0 sm:gap-10 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Tablet/desktop: the category's "dark visual card" — unchanged from before */}
          <div className="group relative hidden w-full sm:block lg:w-1/2">
            <div className={`pointer-events-none absolute inset-10 rounded-full blur-[70px] ${a.glow}`} />
            <div
              className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-3xl
                border border-[var(--border-subtle-dark)] bg-gradient-to-br from-[var(--bg-navy)] to-[var(--bg-navy-2)]
                shadow-xl shadow-slate-900/10 transition-colors ${a.ring}`}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <span className={`absolute left-6 top-6 h-1.5 w-1.5 rounded-full ${a.dot}`} />
              <span className={`absolute bottom-7 right-8 h-2 w-2 rounded-full opacity-60 ${a.dot}`} />

              <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full border border-white/15 opacity-70 sm:h-28 sm:w-28" />
                <div className="absolute h-32 w-32 rounded-full border border-white/10 opacity-40 sm:h-36 sm:w-36" />

                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-xl
                    ring-4 ring-white/10 sm:h-24 sm:w-24 ${a.badge}`}
                >
                  <Icon strokeWidth={1.6} className="h-9 w-9 text-white sm:h-10 sm:w-10" />
                </div>

                {SecondaryIcon && (
                  <div
                    className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white
                      shadow-lg ring-2 ring-[var(--bg-navy)]"
                  >
                    <SecondaryIcon size={15} strokeWidth={2} className="text-[var(--bg-navy)]" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>

            {tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <a
              href="#"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-blue-700"
            >
              {ctaLabel}
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile only: the image runs edge-to-edge as a full-width band directly under the text, no card or gap around it */}
          {image && (
            <img
              src={image}
              alt={imageAlt || title}
              className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] block h-auto w-screen max-w-none sm:hidden"
            />
          )}
        </div>
      </div>
    </section>
  )
}
