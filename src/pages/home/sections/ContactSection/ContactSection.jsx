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
  interest: 'Play-money deployment',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const next = {}
  if (!values.name.trim()) next.name = 'Name is required.'
  if (!values.email.trim()) next.email = 'Email is required.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) next.email = 'Enter a valid email address.'
  if (!values.message.trim()) next.message = 'Project details are required.'
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
            kicker="Start here"
            title="Tell us what you want on the table."
            titleId="contact-title"
            titleClassName="section-title--narrow"
            lede={
              <>
                Frontend-only for now — this form captures intent locally. Email us at{' '}
                {brand.emails.map((email, index) => (
                  <span key={email}>
                    {index > 0 ? ' or ' : null}
                    <a href={`mailto:${email}`} className="text-seafoam-bright underline underline-offset-[0.2em]">
                      {email}
                    </a>
                  </span>
                ))}{' '}
                until backend invitations land.
              </>
            }
          />
        </Reveal>

        <Reveal delay={140} variant="lift">
          {submitted ? (
            <div className="max-w-lg rounded-[1.25rem] border border-line bg-parchment/3 p-8" role="status">
              <h3 className="mb-3 text-2xl">Thanks — we have your note.</h3>
              <p className="mb-5 text-muted">
                Nothing was sent to a server yet. Reach{' '}
                {brand.emails.map((email, index) => (
                  <span key={email}>
                    {index > 0 ? ' or ' : null}
                    <a href={`mailto:${email}`} className="text-seafoam-bright underline underline-offset-[0.2em]">
                      {email}
                    </a>
                  </span>
                ))}{' '}
                directly if you want to move sooner.
              </p>
              <Button type="button" onClick={reset}>
                Write another
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
                  label="Company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={onChange}
                />
                <TextField
                  id="contact-interest"
                  name="interest"
                  as="select"
                  label="Interest"
                  value={form.interest}
                  onChange={onChange}
                >
                  <option>Play-money deployment</option>
                  <option>Game development</option>
                  <option>Software systems</option>
                  <option>Team extension</option>
                  <option>Not sure yet</option>
                </TextField>
              </div>
              <TextField
                id="contact-message"
                name="message"
                as="textarea"
                label="Project details"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="What are you building, and when do you want it live?"
                required
                aria-required="true"
                error={errors.message}
              />
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <Button type="submit">Send interest</Button>
                <p className="text-sm text-muted">No spam. No account required.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
