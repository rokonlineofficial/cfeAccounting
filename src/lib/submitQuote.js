import { SITE } from '../data/site.js'

// Set VITE_FORM_ENDPOINT (e.g. a Web3Forms / Formspree URL) in .env to post the form.
// Without it, the form falls back to opening the visitor's email app addressed to the CFE inbox.
export async function submitQuote(values) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject: 'Free quote request', ...values }),
    })
    if (!res.ok) throw new Error('Request failed')
    return 'sent'
  }
  const body = Object.entries(values).map(([k, v]) => `${k}: ${v || '-'}`).join('\n')
  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Free quote request')}&body=${encodeURIComponent(body)}`
  return 'mailto'
}
