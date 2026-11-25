import Reveal from './Reveal'
import styles from './Engage.module.css'

const modes = [
  {
    title: 'Build with us',
    body: 'A focused engagement to design and ship a product or playable surface from blank slate to launch.',
  },
  {
    title: 'Extend your team',
    body: 'Embed our engineers and designers beside yours — same cadence, shared ownership, no agency theater.',
  },
  {
    title: 'Run as a service',
    body: 'We host and operate your play-money game or software product with monitoring, updates, and a clear SLA.',
  },
]

export default function Engage() {
  return (
    <section id="engage" className={styles.section} aria-labelledby="engage-title">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>Engagement</p>
          <h2 id="engage-title" className={styles.title}>
            Partnership shapes that stay out of the way.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {modes.map((mode, i) => (
            <Reveal key={mode.title} delay={i * 90}>
              <article className={styles.card}>
                <h3>{mode.title}</h3>
                <p>{mode.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
