import { brand } from '../../../brand'
import LogoMark from '../../ui/LogoMark/LogoMark'
import './SiteFooter.css'

const columns = [
  {
    title: 'Studio',
    links: [
      { href: '#about', label: 'About' },
      { href: '#studio', label: 'Studio' },
      { href: '#services', label: 'Services' },
      { href: '#engage', label: 'Engage' },
      { href: '#work', label: 'Work' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '#contact', label: 'Start a project' },
      ...brand.emails.map((email) => ({ href: `mailto:${email}`, label: email, email })),
    ],
  },
]

const year = new Date().getFullYear()
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&z=15&hl=en&output=embed`

export default function SiteFooter() {
  return (
    <footer className="site-footer border-t border-line px-6 pt-24 pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 desk:grid-cols-[1.2fr_1fr] desk:items-start">
        <div className="footer-studio">
          <a href="#top" className="mb-3 inline-flex items-center gap-[0.65rem] font-display text-xl font-semibold tracking-[-0.03em]">
            <LogoMark size="sm" />
            <span>{brand.name}</span>
          </a>
          <p className="max-w-xs text-[0.975rem] text-muted">{brand.tagline}</p>
          <address className="footer-place">
            <a href={`tel:${brand.phoneTel}`}>{brand.phone}</a>
            <p>{brand.address}</p>
          </address>
          <div className="footer-map">
            <iframe
              title={`${brand.name} on Google Maps`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-xs font-semibold tracking-[0.08em] text-brass uppercase">{column.title}</p>
              <ul className="m-0 grid list-none gap-2 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[0.975rem] text-parchment-soft transition-colors duration-200 ease-brand hover:text-parchment">
                      {link.email ? `${link.email.split('@')[0]}\u200b@${link.email.split('@')[1]}` : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line pt-5 text-[0.8125rem] text-muted">
        <p>
          © {year} {brand.legalName}. All rights reserved.
        </p>
        <p>Play-money games, hosted in Hong Kong.</p>
      </div>
    </footer>
  )
}
