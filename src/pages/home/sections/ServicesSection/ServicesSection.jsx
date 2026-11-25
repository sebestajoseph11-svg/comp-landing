import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './ServicesSection.css'

const services = [
  {
    name: 'Software systems',
    summary: 'Operator dashboards, APIs, and product surfaces with quiet reliability and deliberate UX.',
    points: ['Product engineering', 'Platform & APIs', 'Design systems'],
  },
  {
    name: 'Game development',
    summary: 'Playable loops for web and mobile — paced, instrumented, and ready for real traffic.',
    points: ['Client experiences', 'Economy design', 'Live ops tooling'],
  },
  {
    name: 'Play-money as a service',
    summary: 'We deploy and host play-money games end-to-end: sessions, wallets in soft currency, and ops.',
    points: ['Hosted deployment', 'Soft-currency ledgers', 'Monitoring & support'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="services-section border-t border-line px-6 py-36" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="right">
          <SectionHeader
            kicker="Services"
            title="Three crafts. One continuous delivery surface."
            titleId="services-title"
            titleClassName="section-title--wide"
            lede="From greenfield builds to living services — choose a lane, or keep the whole stack with us."
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
