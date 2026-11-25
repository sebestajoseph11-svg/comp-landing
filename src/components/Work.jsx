import Reveal from './Reveal'
import styles from './Work.module.css'

const projects = [
  {
    name: 'Tableline',
    kind: 'Play-money casino suite',
    note: 'Hosted multi-table rooms with soft-currency wallets and live ops console.',
    tone: 'a',
  },
  {
    name: 'Operator North',
    kind: 'Software platform',
    note: 'Internal tooling for content, fraud signals, and player support workflows.',
    tone: 'b',
  },
  {
    name: 'Drift Poker',
    kind: 'Game + service',
    note: 'Browser poker with seasonal economies — deployed and monitored by Feltworks.',
    tone: 'c',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>Selected work</p>
          <h2 id="work-title" className={styles.title}>
            Surfaces we have shaped and kept running.
          </h2>
          <p className={styles.lede}>
            Placeholder case studies — replace with real launches when ready.
          </p>
        </Reveal>

        <div className={styles.showcase}>
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <article className={`${styles.project} ${styles[project.tone]}`}>
                <div className={styles.visual} aria-hidden="true">
                  <span className={styles.orb} />
                  <span className={styles.ring} />
                </div>
                <div className={styles.meta}>
                  <p className={styles.kind}>{project.kind}</p>
                  <h3>{project.name}</h3>
                  <p className={styles.note}>{project.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
