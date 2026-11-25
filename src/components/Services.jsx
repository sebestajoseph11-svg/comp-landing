import Reveal from './Reveal'
import styles from './Services.module.css'

const services = [
  {
    name: 'Software systems',
    summary:
      'Operator dashboards, APIs, and product surfaces with quiet reliability and deliberate UX.',
    points: ['Product engineering', 'Platform & APIs', 'Design systems'],
  },
  {
    name: 'Game development',
    summary:
      'Playable loops for web and mobile — paced, instrumented, and ready for real traffic.',
    points: ['Client experiences', 'Economy design', 'Live ops tooling'],
  },
  {
    name: 'Play-money as a service',
    summary:
      'We deploy and host play-money games end-to-end: sessions, wallets in soft currency, and ops.',
    points: ['Hosted deployment', 'Soft-currency ledgers', 'Monitoring & support'],
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>Services</p>
          <h2 id="services-title" className={styles.title}>
            Three crafts. One continuous delivery surface.
          </h2>
          <p className={styles.lede}>
            From greenfield builds to living services — choose a lane, or keep
            the whole stack with us.
          </p>
        </Reveal>

        <div className={styles.list}>
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 100}>
              <article className={styles.item}>
                <div className={styles.index} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={styles.body}>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
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
