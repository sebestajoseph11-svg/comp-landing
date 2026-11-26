import { useReveal } from '../../../hooks/useReveal'
import { cn } from '../../../lib/cn'
import './Reveal.css'

const variants = {
  left: 'reveal--left',
  right: 'reveal--right',
  up: 'reveal--up',
  lift: 'reveal--lift',
  drift: 'reveal--drift',
  sweep: 'reveal--sweep',
}

export default function Reveal({ children, className, delay = 0, variant = 'up' }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={cn('reveal', variants[variant], visible && 'is-visible', className)}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
