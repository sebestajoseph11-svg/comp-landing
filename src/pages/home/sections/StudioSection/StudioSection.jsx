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
    note: 'In the round',
    alt: 'Two people at an office desk, one wearing a headset and looking at a monitor',
  },
  {
    src: meeting,
    name: 'Hosts',
    note: 'On the floor',
    alt: 'Two people talking at a worn table beside a window',
  },
  {
    src: build,
    name: 'Play',
    note: 'Your round',
    alt: 'Two people working together at a laptop in an office',
  },
  {
    src: team,
    name: 'Players',
    note: 'The room',
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
            kicker="The floor"
            title="Someone is at the table with you."
            titleId="studio-title"
            titleClassName="section-title--wide"
            lede="Players, hosts, and the people who keep Feltworks live. The same floor that opens Crash stays for the question after a round — the rules, the wallet, and the next game."
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
