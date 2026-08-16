export const CTA_CLASSES =
  'inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-2.5 ' +
  'text-sm font-semibold text-white shadow-sm shadow-brand-blue/20 transition-transform hover:scale-[1.03] active:scale-[0.98]'

function Tags({ tags, className = '' }) {
  if (tags.length === 0) return null
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 text-xs font-medium text-brand-blue"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function Visual({ icon: Icon, avatarSrc, avatarAlt }) {
  if (avatarSrc) {
    return (
      <img
        src={avatarSrc}
        alt={avatarAlt || ''}
        className="h-14 w-14 shrink-0 rounded-xl border border-[var(--border-subtle)] object-cover sm:h-16 sm:w-16"
      />
    )
  }
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-surface)] text-brand-blue sm:h-14 sm:w-14">
      <Icon strokeWidth={1.75} className="h-[22px] w-[22px] sm:h-6 sm:w-6" />
    </div>
  )
}

export default function ServiceCard({
  id,
  title,
  description,
  tags = [],
  ctaLabel,
  icon,
  avatarSrc,
  avatarAlt,
  onCtaClick,
}) {
  return (
    <div
      id={id}
      className="rounded-2xl border border-[var(--border-subtle)] bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Visual icon={icon} avatarSrc={avatarSrc} avatarAlt={avatarAlt} />
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] sm:text-xl">{title}</h3>
              <span className="mt-1.5 block h-[3px] w-8 rounded-full bg-brand-orange" />
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{description}</p>

          <Tags tags={tags} className="mt-3" />
        </div>

        <div className="shrink-0">
          {onCtaClick ? (
            <button type="button" onClick={onCtaClick} className={`${CTA_CLASSES} w-full lg:w-auto`}>
              {ctaLabel}
            </button>
          ) : (
            <a href="#" className={`${CTA_CLASSES} w-full lg:w-auto`}>
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
