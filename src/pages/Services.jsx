import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services, groups } from '../data/services.js'
import { SITE } from '../data/site.js'

export default function Services() {
  useSeo('Services | CFE Companies', 'Accounting, payroll, tax, bookkeeping, auditing, business planning and more from CFE Companies.')
  const [params, setParams] = useSearchParams()
  const active = params.get('group') || 'all'
  const group = groups.find((g) => g.slug === active)
  const items = group ? services.filter((s) => s.group === group.name) : services

  return (
    <>
      <PageHero eyebrow="Services" title="The full service index." intro={SITE.outsource} />

      <section className="section section--tight services-intro">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Our Specialties</p></Reveal>
          <Reveal delay={80} className="col-5">
            <ul className="rule-list">{SITE.specialties.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link to="/specialties" className="u-link">All specialties <ArrowUpRight size={16} /></Link>
          </Reveal>
          <Reveal delay={140} className="col-4">
            <p className="notice">{SITE.newOffer}</p>
            <p className="free">{SITE.freeNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filter services by area">
            <button role="tab" aria-selected={active === 'all'} className={`chip ${active === 'all' ? 'is-on' : ''}`} onClick={() => setParams({})}>All <em>{services.length}</em></button>
            {groups.map((g) => (
              <button key={g.slug} role="tab" aria-selected={active === g.slug} className={`chip ${active === g.slug ? 'is-on' : ''}`} onClick={() => setParams({ group: g.slug })}>
                {g.name} <em>{services.filter((s) => s.group === g.name).length}</em>
              </button>
            ))}
          </div>
          <ServicesGrid key={active} items={items} />
        </div>
      </section>

      <CtaBand title={SITE.contactNote} />
    </>
  )
}
