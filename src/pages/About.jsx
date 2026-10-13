import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import FounderSection from '../components/FounderSection.jsx'
import TrustSection from '../components/TrustSection.jsx'
import Reveal from '../components/Reveal.jsx'
import { SITE } from '../data/site.js'
import SectionHeader from '../components/SectionHeader.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function About() {
  useSeo('About CFE Accounting | Founder & Experience', 'Learn about CFE Accounting, founded in 2006 by Zadih Cadyma: experience across industries and expertise in tax, accounting and business planning.')
  return (
    <>
      <PageHero eyebrow="About" title="A holding company built on accounting and tax." intro="The company was founded in 2006 by managing director Zadih Cadyma after leaving Corporate America." />
      <FounderSection full />
      <section className="section section--tight">
        <div className="container">
          <SectionHeader eyebrow="Core Competencies" title="What the founder brings." />
          <ul className="comp">
            {SITE.competencies.map((c, i) => (
              <Reveal as="li" key={c.label} delay={(i % 2) * 60} className="comp__item">
                <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="comp__label">{c.label}</h3>
                <p className="body-p">{c.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeader eyebrow="Milestones" title="Since 2006." />
          <ol className="timeline">
            {SITE.timeline.map((m) => (
              <Reveal as="li" key={m.year} className="timeline__row">
                <span className="timeline__year">{m.year}</span>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <TrustSection />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="The CFE Accounting" title="One holding company, several practices." intro="CFE Accounting is a holding company for all the CFE Accounting, including accounting and tax services."><Link to="/companies" className="u-link">All companies <ArrowUpRight size={16} /></Link></SectionHeader>
          <ul className="family">
            {SITE.family.map((f, i) => (
              <Reveal as="li" key={f.slug} delay={(i % 3) * 60} className="family__item">
                <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="family__name">{f.name}</h3>
                <p className="service__short">{f.text}</p>
                <Link to={`/companies/${f.slug}`} className="u-link">Learn more <ArrowUpRight size={16} /></Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Talk to us about your numbers." />
    </>
  )
}
