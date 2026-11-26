import { brand } from '../../../../brand'
import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './AboutSection.css'

const pillars = [
  {
    title: 'Fast rounds',
    body: 'Crash and Limbo resolve in seconds. Sit down, play a round, and go again without a lobby full of waiting.',
  },
  {
    title: 'Rules in the open',
    body: 'You see the multiplier, the target, and the odds before you bet. The table does not hide the round.',
  },
  {
    title: 'Play-money only',
    body: 'One soft-currency wallet across every game. The climb is real. The wager is not cash.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="about-section border-t border-line px-6 py-36" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="left">
          <SectionHeader
            kicker={`Why ${brand.name}`}
            title="A studio for products that must feel alive after launch."
            titleId="about-title"
            lede="We sit between software engineering and game craft. That overlap is where play-money platforms, operator tools, and player-facing experiences either hold — or fray. We design for the hold."
          />
        </Reveal>

        <div className="grid gap-5 desk:grid-cols-3 desk:gap-8">
          {pillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 110} variant={index === 0 ? 'up' : index === 1 ? 'lift' : 'drift'}>
              <article className="border-t border-line pt-6 desk:pt-7">
                <h3 className="mb-2.5 text-xl">{item.title}</h3>
                <p className="max-w-lg text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
