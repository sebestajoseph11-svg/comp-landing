import crash from '../../../../assets/work/crash-feltworks.jpg'
import limbo from '../../../../assets/work/limbo-bills.jpg'
import lobby from '../../../../assets/work/lobby-start.jpg'
import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './WorkSection.css'

const projects = [
  {
    name: 'Crash',
    kind: 'The rising table',
    note: 'Cash out before the curve breaks. A play-money Crash round on Feltworks.',
    src: crash,
    alt: 'A man at a desk placing a bet on the Feltworks crash game',
  },
  {
    name: 'Limbo',
    kind: 'Set the target',
    note: 'A phone in one hand, a target of 50× on screen, and play-money in the other.',
    src: limbo,
    alt: 'A woman holding a phone showing Limbo at a 50 target and a fan of US hundred-dollar bills',
  },
  {
    name: 'The lobby',
    kind: 'Where a session starts',
    note: 'The Feltworks start page: the Crash multiplier, then the rest of the floor.',
    src: lobby,
    alt: 'Several people standing in front of a television showing the Feltworks start page',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="border-t border-line bg-ink-elevated px-6 py-36" aria-labelledby="work-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="right">
          <SectionHeader
            kicker="Live"
            title="This is the Feltworks floor."
            titleId="work-title"
            lede="Crash on a desk. Limbo in your hand. The lobby on a big screen. The games are the point."
          />
        </Reveal>

        <div className="grid gap-5 wide:grid-cols-[1.2fr_1fr]">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 120}
              variant={index === 0 ? 'up' : index === 1 ? 'lift' : 'drift'}
              className={index === 0 ? 'wide:row-span-2' : undefined}
            >
              <article className="grid h-full grid-rows-[minmax(16rem,1fr)_auto] overflow-hidden rounded-[1.25rem] border border-line bg-ink">
                <div className={`work-visual ${index === 0 ? 'work-visual--lead' : ''}`}>
                  <img src={project.src} alt={project.alt} />
                </div>
                <div className="px-6 pt-6 pb-7">
                  <p className="mb-1.5 text-[0.8125rem] tracking-[0.04em] text-brass">{project.kind}</p>
                  <h3 className="mb-2 text-[1.35rem]">{project.name}</h3>
                  <p className="text-[0.975rem] text-muted">{project.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
