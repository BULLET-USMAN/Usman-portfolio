'use client'

import { useId, useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { submitContactForm, type ContactFormPayload } from '@/lib/contact-form'
import { siteConfig } from '@/data/site.config'

const LIMITS = { name: 100, subject: 150, message: 2000 }
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = Partial<Record<keyof ContactFormPayload, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_VALUES: ContactFormPayload = { name: '', email: '', purpose: '', subject: '', message: '' }

function validate(values: ContactFormPayload): FieldErrors {
  const errors: FieldErrors = {}

  if (!values.name.trim()) errors.name = 'Name is required.'
  else if (values.name.length > LIMITS.name) errors.name = `Keep it under ${LIMITS.name} characters.`

  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!EMAIL_REGEX.test(values.email)) errors.email = 'Enter a valid email address.'

  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  else if (values.subject.length > LIMITS.subject)
    errors.subject = `Keep it under ${LIMITS.subject} characters.`

  if (!values.message.trim()) errors.message = 'Message is required.'
  else if (values.message.length > LIMITS.message)
    errors.message = `Keep it under ${LIMITS.message} characters.`

  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormPayload>(EMPTY_VALUES)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const nameId = useId()
  const emailId = useId()
  const purposeId = useId()
  const subjectId = useId()
  const messageId = useId()
  const statusId = useId()

  function updateField<K extends keyof ContactFormPayload>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields before sending.')
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    try {
      const result = await submitContactForm(values)
      if (result.success) {
        setStatus('success')
        setStatusMessage(
          result.demo
            ? "This is a demo form for now, so nothing was actually sent — no backend is connected yet. Please reach out directly using the contact info above."
            : "Thanks — your message has been sent."
        )
        setValues(EMPTY_VALUES)
      } else {
        setStatus('error')
        setStatusMessage(result.error ?? 'Something went wrong. Please try again or reach out directly.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Something went wrong. Please try again or reach out directly.')
    }
  }

  const isSubmitting = status === 'submitting'
  const inputClass =
    'w-full rounded-[var(--radius-sm)] border border-border bg-surface-glass px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-accent-line focus:outline-none'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="text-xs uppercase tracking-[0.15em] text-text-muted">
            Name
          </label>
          <input
            id={nameId}
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            value={values.name}
            onChange={(e) => updateField('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            className={cn('mt-2', inputClass, errors.name && 'border-border-strong')}
          />
          {errors.name && <FieldError id={`${nameId}-error`}>{errors.name}</FieldError>}
        </div>

        <div>
          <label htmlFor={emailId} className="text-xs uppercase tracking-[0.15em] text-text-muted">
            Email
          </label>
          <input
            id={emailId}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            className={cn('mt-2', inputClass, errors.email && 'border-border-strong')}
          />
          {errors.email && <FieldError id={`${emailId}-error`}>{errors.email}</FieldError>}
        </div>
      </div>

      <div>
        <label htmlFor={purposeId} className="text-xs uppercase tracking-[0.15em] text-text-muted">
          What&apos;s this about? <span className="normal-case text-text-muted">(optional)</span>
        </label>
        <select
          id={purposeId}
          value={values.purpose}
          onChange={(e) => updateField('purpose', e.target.value)}
          className={cn('mt-2', inputClass, 'appearance-none')}
        >
          <option value="">Select a reason</option>
          {siteConfig.contact.purposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={subjectId} className="text-xs uppercase tracking-[0.15em] text-text-muted">
          Subject
        </label>
        <input
          id={subjectId}
          type="text"
          maxLength={LIMITS.subject}
          value={values.subject}
          onChange={(e) => updateField('subject', e.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? `${subjectId}-error` : undefined}
          className={cn('mt-2', inputClass, errors.subject && 'border-border-strong')}
        />
        {errors.subject && <FieldError id={`${subjectId}-error`}>{errors.subject}</FieldError>}
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor={messageId} className="text-xs uppercase tracking-[0.15em] text-text-muted">
            Message
          </label>
          <span
            className={cn(
              'font-mono text-[11px]',
              values.message.length > LIMITS.message ? 'text-accent' : 'text-text-muted'
            )}
          >
            {values.message.length} / {LIMITS.message}
          </span>
        </div>
        <textarea
          id={messageId}
          rows={5}
          maxLength={LIMITS.message}
          value={values.message}
          onChange={(e) => updateField('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className={cn('mt-2 resize-none', inputClass, errors.message && 'border-border-strong')}
        />
        {errors.message && <FieldError id={`${messageId}-error`}>{errors.message}</FieldError>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting && (
            <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          )}
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        <div id={statusId} role="status" aria-live="polite" className="text-sm">
          {status === 'success' && (
            <span className="flex items-start gap-2 text-text-secondary">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {statusMessage}
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-start gap-2 text-text-secondary">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
              {statusMessage}
            </span>
          )}
        </div>
      </div>
    </form>
  )
}

function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs text-text-secondary">
      <AlertCircle className="h-3 w-3 shrink-0 text-text-muted" aria-hidden="true" />
      {children}
    </p>
  )
}
