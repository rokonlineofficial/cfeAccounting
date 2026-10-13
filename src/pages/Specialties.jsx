import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { SITE } from '../data/site.js'
import { services } from '../data/services.js'

export default function Specialties() {
  useSeo('Our Specialties | CFE Accounting', 'Full tax services, bookkeeping, fundraising efforts, estate planning and website creation from CFE Accounting.')
  return (
    <>
      <PageHero eyebrow="Our Specialties" title="Our specialties here at CFE Accounting." intro={SITE.outsource} />

      <section className="section section--tight">
        <div className="container">
          <ol className="spec-list">
            {SITE.specialtyBlocks.map((b, i) => {
              const linked = b.services.map((s) => services.find((x) => x.slug === s)).filter(Boolean)
              return (
                <Reveal as="li" key={b.id} id={b.id} className="spec grid">
                  <span className="spec__num col-3">{String(i + 1).padStart(2, '0')}</span>
                  <div className="col-9">
                    <h2 className="spec__title">{b.title}</h2>
                    <p className="spec__lead">{b.lead}</p>
                    {linked.length > 0 && (
                      <ul className="spec__links">
                        {linked.map((s) => (
                          <li key={s.slug}><Link to={`/services/${s.slug}`} className="u-link">{s.name} <ArrowUpRight size={16} /></Link></li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Welcome</p></Reveal>
          <Reveal delay={80} className="col-6">
            {SITE.welcome.map((w) => <p key={w} className="body-p">{w}</p>)}
            <p className="free">{SITE.freeNote}</p>
            <p className="body-p">Call or e-mail us your inquiries at <a className="u-link u-link--inline" href={`mailto:${SITE.inquiryEmail}`}>{SITE.inquiryEmail}</a>.</p>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Ask about any of our specialties." />
    </>
  )
}
