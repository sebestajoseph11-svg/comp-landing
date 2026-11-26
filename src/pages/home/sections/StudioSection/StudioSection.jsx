import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './StudioSection.css'

const marks = [
  {
    src: '/studio/studio-felt.jpg',
    name: 'Felt',
    note: 'The surface',
    alt: 'Close photograph of dark felt cloth',
  },
  {
    src: '/studio/studio-ring.jpg',
    name: 'Ring',
    note: 'The mark',
    alt: 'A thin pale ring standing on a black table',
  },
  {
    src: '/studio/studio-chip.jpg',
    name: 'Chip',
    note: 'The stake',
    alt: 'A plain white chip resting on black felt',
  },
  {
    src: '/studio/studio-hands.jpg',
    name: 'Hands',
    note: 'The people',
    alt: 'Two hands resting at the edge of a dark felt table',
  },
]

const variants = ['up', 'lift', 'drift', 'right']

export default function StudioSection() {
  return (
    <section id="studio" className="studio-section border-t border-line px-6 py-36" aria-labelledby="studio-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="left">
          <SectionHeader
            kicker="Studio"
            title="The people are the table."
            titleId="studio-title"
            titleClassName="section-title--wide"
            lede="Feltworks is a small studio of engineers, designers, and operators. We do not pass your product through a rotating bench. The same people who cut the first build stay for the service — the felt, the rules, and the quiet hours after launch."
          />
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 desk:grid-cols-4 desk:gap-5">
          {marks.map((mark, index) => (
            <li key={mark.name}>
              <Reveal variant={variants[index]} delay={index * 90}>
                <figure className="studio-figure">
                  <img src={mark.src} alt={mark.alt} />
                  <figcaption>
                    <span className="studio-name">{mark.name}</span>
                    <span className="studio-note">{mark.note}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
