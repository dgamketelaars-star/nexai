const FOOTER_LINKS = [
  { label: 'Over NexAI', href: '#over' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#privacy' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="text-sm font-semibold text-[var(--text-primary)]">
          NexAI <span className="text-brand-cyan">Solutions</span>
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-[var(--text-secondary)]">© 2026 NexAI Solutions</p>
      </div>
    </footer>
  )
}
