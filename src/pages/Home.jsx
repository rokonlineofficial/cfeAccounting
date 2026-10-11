import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import useSeo from '../lib/useSeo.js'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import TrustSection from '../components/TrustSection.jsx'
import CompanyLogo from '../components/CompanyLogo.jsx'
import ScrubText from '../components/ScrubText.jsx'
import Marquee from '../components/Marquee.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services, groups } from '../data/services.js'
import { SITE } from '../data/site.js'

export default function Home() {
  useSeo('CFE Companies | Tax, Accounting & Financial Services', 'Get your financial life in order with CFE Companies. Professional tax, accounting, consulting and financial services for businesses and individuals.')
  return (
    <>
      <Hero />

      <Marquee items={SITE.disciplines.map((d) => d.toUpperCase())} />

      <section className="section statement">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">The Company</p></Reveal>
          <Reveal delay={80} className="col-9">
            <ScrubText className="statement__text" text="CFE Companies is a holding company for all the CFE Companies: accounting and tax services." />
            <ul className="disciplines">
              {SITE.disciplines.map((d, i) => (<li key={d}><span>{String(i + 1).padStart(2, '0')}</span>{d}</li>))}
            </ul>
            <Link to="/about" className="u-link">About CFE <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section welcome">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Welcome</p></Reveal>
          <Reveal delay={80} className="col-5">
            <h2 className="h-section">Welcome to CFE Accounting.</h2>
            {SITE.welcome.map((w) => <p key={w} className="body-p">{w}</p>)}
            <p className="free">{SITE.freeNote}</p>
            <p className="body-p">Call or e-mail us your inquiries at <a className="u-link u-link--inline" href={`mailto:${SITE.inquiryEmail}`}>{SITE.inquiryEmail}</a>.</p>
          </Reveal>
          <Reveal delay={140} className="col-4 specialties">
            <p className="label">Our Specialties</p>
            <ul className="rule-list">{SITE.specialties.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link to="/specialties" className="u-link">All specialties <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Services" title="Services we provide." intro={SITE.outsource} />
          <div className="grid provide">
            <Reveal className="col-6">
              <p className="label">What we offer</p>
              <ul className="checks">{SITE.provide.map((x) => <li key={x}><Check size={18} aria-hidden="true" />{x}</li>)}</ul>
              <p className="notice">{SITE.newOffer}</p>
            </Reveal>
            <Reveal delay={100} className="col-6">
              <p className="label">By area · {services.length} services</p>
              <ul className="group-list">
                {groups.map((g) => (
                  <li key={g.slug}>
                    <Link to={`/services?group=${g.slug}`}>
                      <span>{g.name}</span>
                      <em>{services.filter((s) => s.group === g.name).length}</em>
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Our Companies" title="One name, several practices." intro="CFE Companies is the holding company for the CFE family.">
            <Link to="/companies" className="u-link">Meet all companies <ArrowUpRight size={16} /></Link>
          </SectionHeader>
          <ul className="co-strip">
            {SITE.family.filter((c) => c.logo).map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 60}>
                <Link to={`/companies/${c.slug}`}><CompanyLogo company={c} /><span className="co-strip__name">{c.name}</span></Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section home-founder">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Founder</p></Reveal>
          <Reveal delay={80} className="col-9">
            <h2 className="h-section">Led by <span className="red">{SITE.founder.name}</span>.</h2>
            <p className="lead">The company was founded in {SITE.founded} by managing director {SITE.founder.name} after leaving Corporate America.</p>
            <Link to="/about" className="u-link">Meet the founder <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section home-why">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Why Choose Us</p></Reveal>
          <Reveal delay={80} className="col-9">
            <h2 className="h-section">Accurate. On time. <br />Always available.</h2>
            <ul className="tags tags--mt">{SITE.why.map((w) => <li key={w.title}>{w.title}</li>)}</ul>
            <Link to="/why-choose-us" className="u-link">See all seven reasons <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <Marquee reverse items={SITE.why.map((w) => w.title)} />
      <CtaBand />
    </>
  )
}
