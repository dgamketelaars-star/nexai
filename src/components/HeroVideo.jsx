function Badge() {
  return (
    <span
      className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15
        bg-white/[0.07] px-4 py-2 text-xs font-medium text-[var(--text-secondary-dark)] backdrop-blur-sm"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_6px_1px] shadow-brand-cyan/50" />
      AI &amp; automatisering voor kleine bedrijven
    </span>
  )
}

function Heading({ className = '', threeLines = false }) {
  return (
    <h1 className={`font-bold leading-[1.08] tracking-tight text-[var(--text-primary-dark)] ${className}`}>
      Slimme technologie.
      <br />
      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        {threeLines ? (
          <>
            Gewoon goed
            <br />
            geregeld
          </>
        ) : (
          'Gewoon goed geregeld'
        )}
      </span>
      <span className="text-brand-orange">.</span>
    </h1>
  )
}

function CtaRow() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <a
        href="#diensten"
        className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-orange to-orange-600
          px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 transition-transform hover:scale-[1.03]"
      >
        Bekijk wat we doen
      </a>

      <a
        href="#contact"
        className="text-sm font-semibold text-[var(--text-secondary-dark)] underline decoration-2 underline-offset-4
          decoration-transparent transition-colors hover:text-[var(--text-primary-dark)] hover:decoration-brand-orange"
      >
        Direct contact
      </a>
    </div>
  )
}

function HeroVideoTag({ className }) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={`${import.meta.env.BASE_URL}media/hero-poster.jpg`}
    >
      <source src={`${import.meta.env.BASE_URL}media/hero.mp4`} type="video/mp4" />
    </video>
  )
}

export default function HeroVideo() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile: video as a compact visual banner, copy sits below on a solid background so it always stays readable */}
      <div className="sm:hidden">
        <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden">
          <HeroVideoTag className="absolute inset-0 h-full w-full object-cover object-[right_center]" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(0deg, var(--bg-hero-scrim) 0%, transparent 45%, transparent 100%)' }}
          />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-brand-blue/25 blur-[70px]" />
        </div>
        <div className="bg-[var(--bg-hero-scrim)] px-6 pb-12 pt-9">
          <Badge />
          <Heading className="text-4xl" threeLines />
          <p className="mt-5 max-w-md text-base text-[var(--text-secondary-dark)]">
            AI, automatisering en digitale oplossingen voor kleine bedrijven en ondernemers.
          </p>
          <div className="mt-8">
            <CtaRow />
          </div>
        </div>
      </div>

      {/* Desktop / tablet: full-bleed hero video with copy overlaid on a darkened left side */}
      <div className="relative hidden h-[86vh] min-h-[560px] w-full sm:block lg:h-[92vh]">
        <HeroVideoTag className="absolute inset-0 h-full w-full object-cover object-[right_center]" />

        {/* readability overlay: strong on the left where the copy sits, fading out to the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, var(--bg-hero-scrim) 0%, color-mix(in srgb, var(--bg-hero-scrim) 78%, transparent) 28%, color-mix(in srgb, var(--bg-hero-scrim) 25%, transparent) 55%, transparent 75%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, var(--bg-hero-scrim) 0%, transparent 22%, transparent 78%, color-mix(in srgb, var(--bg-hero-scrim) 55%, transparent) 100%)',
          }}
        />

        {/* subtle brand glow */}
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-blue/25 blur-[100px]" />
        <div className="pointer-events-none absolute left-10 bottom-10 h-56 w-56 rounded-full bg-brand-cyan/15 blur-[100px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
          <div className="max-w-xl">
            <Badge />
            <Heading className="text-5xl lg:text-6xl" />
            <p className="mt-5 max-w-md text-lg text-[var(--text-secondary-dark)]">
              AI, automatisering en digitale oplossingen voor kleine bedrijven en ondernemers.
            </p>
            <div className="mt-8">
              <CtaRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
