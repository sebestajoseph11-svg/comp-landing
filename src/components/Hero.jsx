import { brand } from '../brand'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-brand">
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.glowA} />
        <div className={styles.glowB} />
        <div className={styles.table} />
        <div className={styles.chip} />
        <div className={styles.arc} />
        <div className={styles.grain} />
      </div>

      <div className={styles.content}>
        <p id="hero-brand" className={styles.brand}>
          {brand.name}
        </p>
        <h1 className={styles.headline}>
          Build once.
          <br />
          Deal forever.
        </h1>
        <p className={styles.support}>
          We design software and play-money games, then host them as a living
          service — calm infrastructure for products that need to keep spinning.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.primary}>
            Start a project
          </a>
          <a href="#services" className={styles.secondary}>
            See what we ship
          </a>
        </div>
      </div>
    </section>
  )
}
