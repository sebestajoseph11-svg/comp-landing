import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './WorkSection.css'

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

export default function WorkSection() {
  return (
    <section id="work" className="border-t border-line bg-ink-elevated px-6 py-36" aria-labelledby="work-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="right">
          <SectionHeader
            kicker="Selected work"
            title="Surfaces we have shaped and kept running."
            titleId="work-title"
            lede="Placeholder case studies — replace with real launches when ready."
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
              <article className="grid h-full overflow-hidden rounded-[1.25rem] border border-line bg-ink">
                <div className={`work-visual work-visual--${project.tone} ${index === 0 ? 'work-visual--lead' : ''}`} aria-hidden="true">
                  <span className="work-orb" />
                  <span className="work-ring" />
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
