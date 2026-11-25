import { cn } from '../../../lib/cn'
import './LogoMark.css'

export default function LogoMark({ size = 'md', className }) {
  return <span className={cn('logo-mark', size === 'sm' && 'logo-mark--sm', className)} aria-hidden="true" />
}
