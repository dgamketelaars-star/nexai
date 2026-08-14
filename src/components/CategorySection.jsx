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

function Tags({ tags, className = '' }) {
  if (tags.length === 0) return null
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-sky-400/30 bg-white/5 px-3 py-1 text-xs font-medium text-sky-300
            sm:border-blue-200 sm:bg-blue-50 sm:text-blue-700"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function CategorySection({
  id,
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
  // Mobile: always the deep navy content band. Desktop/tablet: unchanged alternating light bands.
  const bgClass = `bg-[var(--bg-navy)] ${surface ? 'sm:bg-[var(--bg-surface)]' : 'sm:bg-[var(--bg-app)]'}`

  return (
    <section id={id} className={`py-12 sm:border-t sm:border-[var(--border-subtle)] sm:py-16 ${bgClass}`}>
      <div className="mx-auto max-w-7xl sm:px-8">
        <div className={`flex flex-col items-center gap-0 sm:gap-10 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Mobile only: one self-contained block — inset clickable visual with the name overlaid, then centered content */}
          {image && (
            <div className="w-full sm:hidden">
              <div className="px-6">
                <a
                  href="#"
                  className="group relative block overflow-hidden rounded-3xl border border-white/10
                    shadow-2xl shadow-black/40 transition-transform active:scale-[0.98]"
                >
                  <img src={image} alt={imageAlt || title} className="aspect-[3/2] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 block h-[3px] w-9 rounded-full bg-brand-orange" />
                    <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
                  </div>
                </a>
              </div>

              <div className="px-6 pt-6 text-center">
                <p className="mx-auto max-w-sm text-base leading-relaxed text-[var(--text-secondary-dark)]">
                  {description}
                </p>

                <Tags tags={tags} className="mt-5 justify-center" />

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan
                    px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-transform
                    active:scale-[0.98]"
                >
                  {ctaLabel}
                  <ArrowRight size={15} className="text-brand-orange" />
                </a>
              </div>
            </div>
          )}

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

          {/* Tablet/desktop: text column — unchanged from before, just without the category-number eyebrow */}
          <div className="hidden w-full sm:block lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>

            <Tags tags={tags} className="mt-5" />

            <a
              href="#"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors
                hover:text-blue-700"
            >
              {ctaLabel}
              <ArrowRight size={15} className="text-brand-orange" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
