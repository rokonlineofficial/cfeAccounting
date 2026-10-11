import { SITE } from '../data/site.js'
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'

export default function TrustSection() {
  return (
    <section className="trust" aria-label="Credentials">
      <div className="container grid">
        {SITE.trust.map((t, i) => (
          <Reveal key={t.value} delay={i * 80} className="trust__item col-4">
            <span className="trust__value"><CountUp value={t.value} /></span>
            <span className="trust__label">{t.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
