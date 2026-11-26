import hero from '../../../../assets/hero-abyss.jpg'
import { brand } from '../../../../brand'
import Reveal from '../../../../components/motion/Reveal/Reveal'
import Button from '../../../../components/ui/Button/Button'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden" aria-labelledby="hero-brand">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-glow hero-glow--a" />
        <div className="hero-glow hero-glow--b" />
        <div className="hero-table" />
        <div className="hero-chip" />
        <div className="hero-arc" />
        <div className="hero-grain" />
      </div>

      <figure className="hero-visual">
        <img src={hero} alt="Silver coins and diamonds on a black seabed, under a shaft of light" />
      </figure>

      <div className="hero-copy mx-auto w-full max-w-6xl px-6">
        <Reveal variant="sweep">
          <p id="hero-brand" className="mb-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
            {brand.name}
          </p>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <h1 className="mb-5 max-w-[14ch] text-[clamp(1.85rem,4.4vw,3rem)] font-medium text-parchment-soft">
            Ride it.
            <br />
            Cash out.
          </h1>
        </Reveal>
        <Reveal variant="lift" delay={340}>
          <p className="mb-8 max-w-sm text-muted">
            Feltworks is the play-money game site. Crash climbs until you cash
            out. Limbo waits on your target. One wallet, soft currency only.
          </p>
        </Reveal>
        <Reveal variant="right" delay={480}>
          <div className="flex flex-wrap gap-3">
            <Button href="#contact">Play now</Button>
            <Button href="#services" variant="secondary">
              See the games
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
