import { brand } from '../brand'
import Reveal from './Reveal'
import styles from './About.module.css'

const pillars = [
  {
    title: 'Craft over churn',
    body: 'Fewer handoffs. Deeper ownership. Interfaces and systems that feel considered, not assembled.',
  },
  {
    title: 'Play with integrity',
    body: 'Play-money products that respect the player — fair loops, clear rules, and calm operational floors.',
  },
  {
    title: 'Ship as a service',
    body: 'We do not toss you a build. We host, observe, and evolve the product with you after launch.',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>Why {brand.name}</p>
          <h2 id="about-title" className={styles.title}>
            A studio for products that must feel alive after launch.
          </h2>
          <p className={styles.lede}>
            We sit between software engineering and game craft. That overlap is
            where play-money platforms, operator tools, and player-facing
            experiences either hold — or fray. We design for the hold.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className={styles.pillar}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
