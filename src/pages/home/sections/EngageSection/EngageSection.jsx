import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './EngageSection.css'

const modes = [
  {
    title: 'Build with us',
    body: 'A focused engagement to design and ship a product or playable surface from blank slate to launch.',
  },
  {
    title: 'Extend your team',
    body: 'Embed our engineers and designers beside yours — same cadence, shared ownership, no agency theater.',
  },
  {
    title: 'Run as a service',
    body: 'We host and operate your play-money game or software product with monitoring, updates, and a clear SLA.',
  },
]

export default function EngageSection() {
  return (
    <section id="engage" className="engage-section border-t border-line px-6 py-36" aria-labelledby="engage-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="left">
          <SectionHeader
            kicker="Engagement"
            title="Partnership shapes that stay out of the way."
            titleId="engage-title"
          />
        </Reveal>

        <div className="grid border-t border-line desk:grid-cols-3 desk:gap-x-10 desk:border-t-0">
          {modes.map((mode, index) => (
            <Reveal key={mode.title} delay={index * 110} variant={index === 0 ? 'up' : index === 1 ? 'lift' : 'drift'}>
              <article className="border-b border-line py-7 desk:border-t desk:border-b-0 desk:pt-7 desk:pb-0">
                <h3 className="mb-3 text-xl">{mode.title}</h3>
                <p className="max-w-md text-muted">{mode.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
