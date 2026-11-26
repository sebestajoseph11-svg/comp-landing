import { useEffect, useState } from 'react'
import { brand } from '../../../brand'
import { useActiveSection } from '../../../hooks/useActiveSection'
import { cn } from '../../../lib/cn'
import Button from '../../ui/Button/Button'
import LogoMark from '../../ui/LogoMark/LogoMark'
import Modal from '../../ui/Modal/Modal'
import './SiteHeader.css'

const links = [
  { href: '#about', label: 'Why play' },
  { href: '#studio', label: 'Floor' },
  { href: '#services', label: 'Games' },
  { href: '#engage', label: 'Rounds' },
  { href: '#work', label: 'Live' },
  { href: '#contact', label: 'Join' },
]

const sectionIds = links.map((link) => link.href.slice(1))

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 55rem)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-[1.1rem]">
        <a href="#top" className="relative z-[2] inline-flex items-center gap-[0.65rem]" aria-label={`${brand.name} home`}>
          <LogoMark />
          <span className="font-display text-[1.15rem] font-semibold tracking-[-0.03em]">{brand.name}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 nav:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-label={link.label}
              className={cn('nav-link', active === link.href.slice(1) && 'is-active')}
              aria-current={active === link.href.slice(1) ? 'true' : undefined}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <Button href="#contact" size="sm" className="header-cta">
          Start a project
        </Button>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <Modal open={open} onClose={close} variant="fullscreen" label="Menu">
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn('nav-link nav-link--menu', active === link.href.slice(1) && 'is-active')}
              aria-current={active === link.href.slice(1) ? 'true' : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-6 w-full" onClick={close}>
            Start a project
          </Button>
        </nav>
      </Modal>
    </header>
  )
}
