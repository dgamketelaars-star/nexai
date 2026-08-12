import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Schakel naar light mode' : 'Schakel naar dark mode'}
      aria-pressed={isDark}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors
        border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]
        hover:border-brand-cyan/50 hover:text-brand-cyan cursor-pointer"
    >
      {isDark ? <Sun size={17} strokeWidth={1.75} /> : <Moon size={17} strokeWidth={1.75} />}
    </button>
  )
}
