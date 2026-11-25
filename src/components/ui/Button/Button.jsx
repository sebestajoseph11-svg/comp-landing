import { cn } from '../../../lib/cn'
import './Button.css'

const variants = {
  primary: 'bg-seafoam text-ink hover:bg-seafoam-bright hover:-translate-y-px',
  secondary:
    'border border-line bg-parchment/3 text-parchment hover:border-parchment/22 hover:bg-parchment/6',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  children,
  ...props
}) {
  const classes = cn(
    'ui-button',
    size === 'sm' && 'ui-button--sm',
    variants[variant],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
