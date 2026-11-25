import { useState } from 'react'
import { brand } from '../brand'
import Reveal from './Reveal'
import styles from './Contact.module.css'

const initial = {
  name: '',
  email: '',
  company: '',
  interest: 'Play-money deployment',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Frontend-only placeholder — wire to email/backend later.
    setSubmitted(true)
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.kicker}>Start here</p>
          <h2 id="contact-title" className={styles.title}>
            Tell us what you want on the table.
          </h2>
          <p className={styles.lede}>
            Frontend-only for now — this form captures intent locally. Email us
            at{' '}
            <a href={`mailto:${brand.email}`} className={styles.mail}>
              {brand.email}
            </a>{' '}
            until backend invitations land.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div className={styles.thanks} role="status">
              <h3>Thanks — we have your note.</h3>
              <p>
                Nothing was sent to a server yet. Reach {brand.email} directly
                if you want to move sooner.
              </p>
              <button
                type="button"
                className={styles.reset}
                onClick={() => {
                  setSubmitted(false)
                  setForm(initial)
                }}
              >
                Write another
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.row}>
                <label>
                  Name
                  <input
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>
              <div className={styles.row}>
                <label>
                  Company
                  <input
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={onChange}
                  />
                </label>
                <label>
                  Interest
                  <select name="interest" value={form.interest} onChange={onChange}>
                    <option>Play-money deployment</option>
                    <option>Game development</option>
                    <option>Software systems</option>
                    <option>Team extension</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>
              <label className={styles.full}>
                Project details
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="What are you building, and when do you want it live?"
                  required
                />
              </label>
              <div className={styles.actions}>
                <button type="submit" className={styles.submit}>
                  Send interest
                </button>
                <p className={styles.hint}>No spam. No account required.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
