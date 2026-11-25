import { brand } from '../../../../brand'
import Button from '../../../../components/ui/Button/Button'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section id="top" className="relative isolate grid min-h-svh items-end overflow-hidden nav:items-center" aria-labelledby="hero-brand">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-glow hero-glow--a" />
        <div className="hero-glow hero-glow--b" />
        <div className="hero-table" />
        <div className="hero-chip" />
        <div className="hero-arc" />
        <div className="hero-grain" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-[8.5rem] pb-[4.5rem] nav:pt-40 nav:pb-[5.5rem]">
        <p id="hero-brand" className="hero-x mb-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
          {brand.name}
        </p>
        <h1 className="hero-y mb-5 max-w-[14ch] text-[clamp(1.85rem,4.4vw,3rem)] font-medium text-parchment-soft">
          Build once.
          <br />
          Deal forever.
        </h1>
        <p className="hero-lift mb-8 max-w-lg text-muted">
          We design software and play-money games, then host them as a living
          service — calm infrastructure for products that need to keep spinning.
        </p>
        <div className="hero-in-right flex flex-wrap gap-3">
          <Button href="#contact">Start a project</Button>
          <Button href="#services" variant="secondary">
            See what we ship
          </Button>
        </div>
      </div>
    </section>
  )
}
