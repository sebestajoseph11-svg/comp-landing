import Reveal from './Reveal'
import styles from './Testimonials.module.css'

const quotes = [
  {
    quote:
      'Feltworks treated our play-money rooms like a product, not a weekend build. Launch was calm. The weeks after were calmer.',
    name: 'Maya Chen',
    role: 'Head of Product, Northline Leisure',
  },
  {
    quote:
      'They shipped the game and stayed for the service layer — ledgers, ops, the boring parts that keep players trusting the table.',
    name: 'Jonas Reid',
    role: 'Founder, Drift Collective',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="proof-title">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>Proof</p>
          <h2 id="proof-title" className={styles.title}>
            Quiet confidence from partners who stayed.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {quotes.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <figure className={styles.quote}>
                <blockquote>
                  <p>“{item.quote}”</p>
                </blockquote>
                <figcaption>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.role}>{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
