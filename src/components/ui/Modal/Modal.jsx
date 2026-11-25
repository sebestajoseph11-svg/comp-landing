import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../../lib/cn'
import './Modal.css'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Modal({ open, onClose, label, variant = 'center', children }) {
  const panelRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return undefined

    const panel = panelRef.current
    const focusable = () => [...panel.querySelectorAll(FOCUSABLE)]

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const previouslyFocused = document.activeElement
    ;(focusable()[0] || panel).focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      className={cn('ui-modal', variant === 'fullscreen' && 'ui-modal--fullscreen')}
      onMouseDown={() => onCloseRef.current()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={cn(
          'ui-modal__panel',
          variant === 'fullscreen' && 'ui-modal__panel--fullscreen',
        )}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
