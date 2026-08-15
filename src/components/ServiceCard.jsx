export const CTA_CLASSES =
  'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 ' +
  'text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-transform hover:scale-[1.03] active:scale-[0.98]'

function Tags({ tags, className = '' }) {
  if (tags.length === 0) return null
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-sky-400/30 bg-white/5 px-3 py-1 text-xs font-medium text-sky-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function ServiceCard({ id, title, description, tags = [], ctaLabel, image, imageAlt }) {
  return (
    <div
      id={id}
      className="overflow-hidden rounded-3xl border border-[var(--border-subtle-dark)]
        bg-gradient-to-br from-[var(--bg-navy)] to-[var(--bg-navy-2)] p-6 shadow-xl shadow-slate-900/10 sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* Visual: the whole image is clickable, name overlaid as real text */}
        <a
          href="#"
          className="group relative block shrink-0 overflow-hidden rounded-2xl border border-white/10
            transition-transform active:scale-[0.98] lg:w-2/5"
        >
          <img src={image} alt={imageAlt || title} className="aspect-[3/2] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="mb-2 block h-[3px] w-9 rounded-full bg-brand-orange" />
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
          </div>
        </a>

        <div className="text-center lg:flex-1 lg:text-left">
          <p className="mx-auto max-w-sm text-base leading-relaxed text-[var(--text-secondary-dark)] lg:mx-0 lg:max-w-none">
            {description}
          </p>

          <Tags tags={tags} className="mt-4 justify-center lg:justify-start" />

          <a href="#" className={`mt-6 ${CTA_CLASSES}`}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  )
}
