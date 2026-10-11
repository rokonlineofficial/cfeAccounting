import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { submitQuote } from '../lib/submitQuote.js'

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'website', label: 'Website', type: 'text', autoComplete: 'url', placeholder: 'https://', required: false },
  { name: 'employees', label: 'Number of Employees', type: 'number', required: false },
  { name: 'incoming', label: 'Number of Incoming Invoices', type: 'number', required: false },
  { name: 'outgoing', label: 'Number of Outgoing Invoices', type: 'number', required: false },
]

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone number.'
  ;['employees', 'incoming', 'outgoing'].forEach((k) => {
    if (v[k] !== '' && (isNaN(Number(v[k])) || Number(v[k]) < 0)) e[k] = 'Enter a number, 0 or more.'
  })
  if (v.website && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(v.website.trim())) e.website = 'Enter a valid website address.'
  return e
}

export default function QuoteForm() {
  const [values, setValues] = useState(Object.fromEntries(FIELDS.map((f) => [f.name, ''])))
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((x) => ({ ...x, [e.target.name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      await submitQuote(values)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="form-done" role="status">
        <Check size={28} />
        <h3 className="h-small">Thank you.</h3>
        <p>Your request is on its way. We will be in touch about your free estimation.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        {FIELDS.map((f) => (
          <div key={f.name} className="field">
            <label htmlFor={`f-${f.name}`}>{f.label}{f.required && <span className="red" aria-hidden="true"> *</span>}</label>
            <input
              id={`f-${f.name}`} name={f.name} type={f.type} value={values[f.name]} onChange={onChange}
              autoComplete={f.autoComplete} placeholder={f.placeholder} min={f.type === 'number' ? 0 : undefined}
              inputMode={f.type === 'number' ? 'numeric' : undefined}
              aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `e-${f.name}` : undefined}
            />
            {errors[f.name] && <p className="field__error" id={`e-${f.name}`}>{errors[f.name]}</p>}
          </div>
        ))}
      </div>
      {status === 'error' && <p className="field__error" role="alert">Something went wrong. Please try again or email us directly.</p>}
      <button className="btn btn--red form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get a Free Quote'} <ArrowRight size={18} />
      </button>
    </form>
  )
}
