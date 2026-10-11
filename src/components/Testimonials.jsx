import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length

  if (n === 0) {
    return (
      <div className="empty">
        <span className="empty__mark" aria-hidden="true">“</span>
        <p className="empty__title">Client testimonials are coming soon.</p>
        <p className="empty__text">Real client reviews will appear here once they are added.</p>
      </div>
    )
  }

  const t = testimonials[i]
  const go = (d) => setI((i + d + n) % n)

  return (
    <div className="testi">
      <span className="testi__mark" aria-hidden="true">“</span>
      <blockquote key={i} className="testi__quote fade-swap">
        <p>{t.quote}</p>
        <footer>
          <strong>{t.name}</strong>
          {t.role && <span> — {t.role}</span>}
        </footer>
      </blockquote>
      {n > 1 && (
        <div className="testi__nav">
          <span className="label">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          <button onClick={() => go(-1)} aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
          <button onClick={() => go(1)} aria-label="Next testimonial"><ChevronRight size={20} /></button>
        </div>
      )}
    </div>
  )
}
