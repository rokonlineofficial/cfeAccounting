import { SITE } from '../data/site.js'
import Reveal from './Reveal.jsx'

export default function WhyList() {
  return (
    <ol className="why-list">
      {SITE.why.map((w, i) => (
        <Reveal as="li" key={w.title} delay={(i % 2) * 60} className="why-list__row">
          <span className="why-list__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="why-list__dash" aria-hidden="true">—</span>
          <span className="why-list__title">{w.title}</span>
          {w.note && <span className="why-list__note">{w.note}</span>}
        </Reveal>
      ))}
    </ol>
  )
}
