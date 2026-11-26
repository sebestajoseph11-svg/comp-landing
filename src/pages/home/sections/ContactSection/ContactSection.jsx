import { useState } from 'react'
import { brand } from '../../../../brand'
import Reveal from '../../../../components/motion/Reveal/Reveal'
import Button from '../../../../components/ui/Button/Button'
import SectionHeader from '../../../../components/ui/SectionHeader/SectionHeader'
import TextField from '../../../../components/ui/TextField/TextField'
import './ContactSection.css'

const initial = {
  name: '',
  email: '',
  company: '',
  interest: 'Crash',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const next = {}
  if (!values.name.trim()) next.name = 'Name is required.'
  if (!values.email.trim()) next.email = 'Email is required.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) next.email = 'Enter a valid email address.'
  if (!values.message.trim()) next.message = 'Tell us which game you want.'
  return next
}

export default function ContactSection() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [attempted, setAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    const nextForm = { ...form, [name]: value }
    setForm(nextForm)
    if (attempted) setErrors(validate(nextForm))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setAttempted(true)
    setErrors(nextErrors)
    const firstInvalid = ['name', 'email', 'message'].find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setAttempted(false)
    setErrors({})
    setForm(initial)
  }

  return (
    <section id="contact" className="contact-section relative isolate overflow-hidden border-t border-line px-6 py-36" aria-labelledby="contact-title">
      <div className="contact-atmosphere" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal variant="right">
          <SectionHeader
            kicker="Join"
            title="Get a seat at Feltworks."
            titleId="contact-title"
            titleClassName="section-title--narrow"
            lede={
              <>
                Tell us which game you want first. Write{' '}
                {brand.emails.map((email, index) => (
                  <span key={email}>
                    {index > 0 ? ' or ' : null}
                    <a href={`mailto:${email}`} className="text-seafoam-bright underline underline-offset-[0.2em]">
                      {email}
                    </a>
                  </span>
                ))}{' '}
                and we will point you at the table.
              </>
            }
          />
        </Reveal>

        <Reveal delay={140} variant="lift">
          {submitted ? (
            <div className="max-w-lg rounded-[1.25rem] border border-line bg-parchment/3 p-8" role="status">
              <h3 className="mb-3 text-2xl">You are on the list.</h3>
              <p className="mb-5 text-muted">
                Email{' '}
                {brand.emails.map((email, index) => (
                  <span key={email}>
                    {index > 0 ? ' or ' : null}
                    <a href={`mailto:${email}`} className="text-seafoam-bright underline underline-offset-[0.2em]">
                      {email}
                    </a>
                  </span>
                ))}{' '}
                if you want the link to the table tonight.
              </p>
              <Button type="button" onClick={reset}>
                Send another
              </Button>
            </div>
          ) : (
            <form className="grid max-w-[44rem] gap-4" onSubmit={onSubmit} noValidate>
              {attempted && Object.keys(errors).length > 0 && (
                <p className="text-[0.8125rem] font-medium text-danger" role="alert">
                  Fill out the required fields before sending.
                </p>
              )}
              <div className="grid gap-4 desk:grid-cols-2">
                <TextField
                  id="contact-name"
                  name="name"
                  label="Name"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  aria-required="true"
                  error={errors.name}
                />
                <TextField
                  id="contact-email"
                  name="email"
                  type="email"
                  label="Email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  aria-required="true"
                  error={errors.email}
                />
              </div>
              <div className="grid gap-4 desk:grid-cols-2">
                <TextField
                  id="contact-company"
                  name="company"
                  label="Username"
                  autoComplete="username"
                  value={form.company}
                  onChange={onChange}
                />
                <TextField
                  id="contact-interest"
                  name="interest"
                  as="select"
                  label="First game"
                  value={form.interest}
                  onChange={onChange}
                >
                  <option>Crash</option>
                  <option>Limbo</option>
                  <option>Dice</option>
                  <option>Coinflip</option>
                  <option>Not sure yet</option>
                </TextField>
              </div>
              <TextField
                id="contact-message"
                name="message"
                as="textarea"
                label="What do you want to play"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Crash, Limbo, or the whole floor — and when you want in."
                required
                aria-required="true"
                error={errors.message}
              />
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <Button type="submit">Request a seat</Button>
                <p className="text-sm text-muted">Play-money only. No cash deposit.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
