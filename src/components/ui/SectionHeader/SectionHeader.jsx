import { cn } from '../../../lib/cn'
import './SectionHeader.css'

export default function SectionHeader({ kicker, title, titleId, lede, titleClassName }) {
  return (
    <div className="mb-14">
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 id={titleId} className={cn('section-title', titleClassName)}>
        {title}
      </h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </div>
  )
}
