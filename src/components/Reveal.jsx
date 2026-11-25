import { useReveal } from '../hooks/useReveal'
import styles from './Reveal.module.css'

export default function Reveal({ children, className = '', delay = 0 }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
