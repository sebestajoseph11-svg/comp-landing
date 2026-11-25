import { brand } from '../brand'
import styles from './Footer.module.css'

const columns = [
  {
    title: 'Studio',
    links: [
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#engage', label: 'Engage' },
      { href: '#work', label: 'Work' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '#contact', label: 'Start a project' },
      { href: `mailto:${brand.email}`, label: brand.email },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a href="#top" className={styles.logo}>
            <span className={styles.mark} aria-hidden="true" />
            <span>{brand.name}</span>
          </a>
          <p className={styles.tagline}>{brand.tagline}</p>
        </div>

        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title}>
              <p className={styles.colTitle}>{col.title}</p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {brand.legalName}. All rights reserved.
        </p>
        <p className={styles.rename}>
          Rename via <code>src/brand.js</code>
        </p>
      </div>
    </footer>
  )
}
