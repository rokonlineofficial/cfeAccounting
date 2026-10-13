import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CompanyLogo from '../components/CompanyLogo.jsx'
import TrustSection from '../components/TrustSection.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '../data/site.js'

export default function Companies() {
  useSeo('Our Companies | CFE Accounting', 'CFE Accounting is a holding company for CFE Tax Services, CFE Consulting, CFE Publishing, Real Estate and Money Masters International.')
  return (
    <>
      <PageHero eyebrow="Our Companies" title="The CFE family of companies." intro="CFE Accounting is a holding company for all the CFE Accounting, including accounting and tax services." />
      <section className="section section--tight">
        <div className="container">
          <ol className="co-list">
            {SITE.family.map((c, i) => (
              <Reveal as="li" key={c.slug} className="co-row grid">
                <span className="service__num col-1">{String(i + 1).padStart(2, '0')}</span>
                <div className="col-5 co-row__logo"><CompanyLogo company={c} /></div>
                <div className="col-6 co-row__text">
                  <h2 className="co-row__name">{c.name}</h2>
                  <p className="body-p">{c.text}</p>
                  <Link to={`/companies/${c.slug}`} className="u-link">View {c.name} <ArrowUpRight size={16} /></Link>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <TrustSection />
      <CtaBand title="Talk to the team behind CFE." />
    </>
  )
}
