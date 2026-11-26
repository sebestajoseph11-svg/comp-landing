import { cn } from '../../../lib/cn'
import mark from '../../../assets/logo-mark.png'
import './LogoMark.css'

export default function LogoMark({ size = 'md', className }) {
  return (
    <img
      src={mark}
      alt=""
      className={cn('logo-mark', size === 'sm' && 'logo-mark--sm', className)}
    />
  )
}
