import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './EngageSection.css'

const modes = [
  {
    title: 'Open a table',
    body: 'Pick Crash, Limbo, or another game on the floor. The round starts as soon as you do.',
  },
  {
    title: 'Bet play-money',
    body: 'Your balance is soft currency. Climb, cash out, and keep it on Feltworks. No cash wager.',
  },
  {
    title: 'Come back for the next one',
    body: 'The floor stays open. Same account, a new round, and the wallet you already have.',
  },
]

export default function EngageSection() {
  return (
    <section id="engage" className="engage-section border-t border-line px-6 py-36" aria-labelledby="engage-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="left">
          <SectionHeader
            kicker="Rounds"
            title="Sit down. Play one. Stay if you want."
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
