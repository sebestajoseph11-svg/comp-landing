import { useEffect, useState } from 'react'
import { brand } from '../brand'
import styles from './Nav.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#engage', label: 'Engage' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label={`${brand.name} home`}>
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.word}>{brand.name}</span>
        </a>

        <nav className={styles.desktop} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Start a project
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  )
}
