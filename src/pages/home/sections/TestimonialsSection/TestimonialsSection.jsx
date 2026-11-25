import Reveal from '../../../../components/motion/Reveal/Reveal'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import './TestimonialsSection.css'

const quotes = [
  {
    quote:
      'Feltworks treated our play-money rooms like a product, not a weekend build. Launch was calm. The weeks after were calmer.',
    name: 'Maya Chen',
    role: 'Head of Product, Northline Leisure',
  },
  {
    quote:
      'They shipped the game and stayed for the service layer — ledgers, ops, the boring parts that keep players trusting the table.',
    name: 'Jonas Reid',
    role: 'Founder, Drift Collective',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="border-t border-line bg-ink px-6 py-36" aria-labelledby="proof-title">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="left">
          <SectionHeader
            kicker="Proof"
            title="Quiet confidence from partners who stayed."
            titleId="proof-title"
          />
        </Reveal>

        <div className="grid gap-5 desk:grid-cols-2 desk:gap-12">
          {quotes.map((item, index) => (
            <Reveal key={item.name} delay={index * 140} variant={index === 0 ? 'up' : 'lift'}>
              <figure className="m-0 border-t border-line pt-8 desk:pt-9">
                <blockquote className="mb-6">
                  <p className="proof-quote">“{item.quote}”</p>
                </blockquote>
                <figcaption className="flex flex-col gap-1">
                  <span className="text-[0.9375rem] font-semibold">{item.name}</span>
                  <span className="text-sm text-muted">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
