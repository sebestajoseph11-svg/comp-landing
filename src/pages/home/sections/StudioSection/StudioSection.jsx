import support from '../../../../assets/studio/support.png'
import meeting from '../../../../assets/studio/meeting.png'
import build from '../../../../assets/studio/build.png'
import team from '../../../../assets/studio/team.png'
import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './StudioSection.css'

const moments = [
  {
    src: support,
    name: 'Support',
    note: 'Live help',
    alt: 'Two people at an office desk, one wearing a headset and looking at a monitor',
  },
  {
    src: meeting,
    name: 'Meeting',
    note: 'With partners',
    alt: 'Two people talking at a worn table beside a window',
  },
  {
    src: build,
    name: 'Build',
    note: 'The work',
    alt: 'Two people working together at a laptop in an office',
  },
  {
    src: team,
    name: 'Team',
    note: 'The studio',
    alt: 'Three colleagues standing together in an office hallway',
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
          {moments.map((moment, index) => (
            <li key={moment.name}>
              <Reveal variant={variants[index]} delay={index * 90}>
                <figure className="studio-figure">
                  <img src={moment.src} alt={moment.alt} />
                  <figcaption>
                    <span className="studio-name">{moment.name}</span>
                    <span className="studio-note">{moment.note}</span>
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
