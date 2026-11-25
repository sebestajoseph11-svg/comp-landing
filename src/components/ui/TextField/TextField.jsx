import { cn } from '../../../lib/cn'
import './TextField.css'

export default function TextField({ id, label, error, as: Field = 'input', className, ...props }) {
  const invalid = Boolean(error)
  const errorId = `${id}-error`

  return (
    <label htmlFor={id} className={cn('grid gap-1.5 text-sm font-medium text-parchment-soft', className)}>
      {label}
      <Field
        id={id}
        className={cn('ui-field', invalid && 'is-invalid')}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? errorId : undefined}
        {...props}
      />
      {invalid ? (
        <span id={errorId} className="text-[0.8125rem] leading-snug font-medium text-danger">
          {error}
        </span>
      ) : null}
    </label>
  )
}
