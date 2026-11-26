import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './ServicesSection.css'

const services = [
  {
    name: 'Crash',
    summary: 'A multiplier climbs in front of you. Cash out while it is still rising, or watch it break.',
    points: ['Rising curve', 'Cash out anytime', 'Classic and Trenball'],
  },
  {
    name: 'Limbo',
    summary: 'Set a target. The rocket either clears it or it does not. One bet, one result.',
    points: ['Pick your target', 'One-tap bet', 'Instant result'],
  },
  {
    name: 'The rest of the floor',
    summary: 'Dice, Coinflip, Mines, Wheel, and Plinko spend the same play-money wallet as Crash and Limbo.',
    points: ['Dice', 'Coinflip', 'Mines and more'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="services-section border-t border-line px-6 py-36" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="right">
          <SectionHeader
            kicker="Games"
            title="Three ways in. One Feltworks wallet."
            titleId="services-title"
            titleClassName="section-title--wide"
            lede="Start with Crash or Limbo, or open the rest of the floor. Every game spends the same play-money balance."
          />
        </Reveal>

        <div>
          {services.map((service, index) => (
            <Reveal
              key={service.name}
              delay={index * 120}
              variant={index === 0 ? 'up' : index === 1 ? 'lift' : 'drift'}
              className="border-t border-line last:border-b"
            >
              <article className="grid gap-4 py-8 desk:grid-cols-[4rem_1fr] desk:items-start desk:gap-8 desk:py-10">
                <div className="font-display text-sm tracking-[0.08em] text-brass" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="mb-3 text-[clamp(1.35rem,2.4vw,1.75rem)]">{service.name}</h3>
                  <p className="mb-4 max-w-2xl text-muted">{service.summary}</p>
                  <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
                    {service.points.map((point) => (
                      <li key={point} className="service-point">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
