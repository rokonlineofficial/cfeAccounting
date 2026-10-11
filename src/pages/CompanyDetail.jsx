import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import useSeo from '../lib/useSeo.js'
import Reveal from '../components/Reveal.jsx'
import CompanyLogo from '../components/CompanyLogo.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import TrustSection from '../components/TrustSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import NotFound from './NotFound.jsx'
import { SITE } from '../data/site.js'
import { services } from '../data/services.js'

export default function CompanyDetail() {
  const { slug } = useParams()
  const company = SITE.family.find((c) => c.slug === slug)
  useSeo(company ? `${company.name} | CFE Companies` : 'Not found | CFE Companies', company ? company.text : 'This page could not be found.')
  if (!company) return <NotFound />

  const i = SITE.family.indexOf(company)
  const related = company.related.map((s) => services.find((x) => x.slug === s)).filter(Boolean)
  const others = SITE.family.filter((c) => c.slug !== slug)

  return (
    <>
      <section className="page-hero">
        <div className="container grid">
          <Reveal className="col-3"><p className="label"><Link to="/companies" className="back"><ArrowLeft size={14} /> All companies</Link></p></Reveal>
          <Reveal delay={80} className="col-9">
            <p className="label label--red">Company {String(i + 1).padStart(2, '0')}</p>
            <h1 className="h-page">{company.name}</h1>
            <p className="lead">{company.text}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container grid">
          <Reveal className="col-6 co-big"><CompanyLogo company={company} /></Reveal>
          <Reveal delay={100} className="col-5 col-start-8 co-side">
            <p className="label label--red">About</p>
            <p className="detail__text">{company.text}</p>
            <p className="body-p">{slug === 'cfe-companies' ? 'CFE Companies is the holding company for the CFE family: ' + SITE.family.slice(1).map((c) => c.name).join(', ') + '.' : 'Part of the CFE family of companies, with CFE Companies as the holding company.'}</p>
            <p className="free">{SITE.freeNote}</p>
            <Link to="/contact#quote" className="btn btn--red">Request a Quote <ArrowUpRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <p className="label label--red related__label">Related services</p>
            <ServicesGrid items={related} />
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <p className="label label--red related__label">The rest of the family</p>
          <ul className="co-strip co-strip--sm">
            {others.map((c, n) => (
              <Reveal as="li" key={c.slug} delay={n * 50}>
                <Link to={`/companies/${c.slug}`}><CompanyLogo company={c} /><span className="co-strip__name">{c.name}</span></Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <TrustSection />
      <CtaBand title={`Work with ${company.name}.`} />
    </>
  )
}
