import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import TestimonialsView from '../components/Testimonials.jsx'
import TrustSection from '../components/TrustSection.jsx'
import Reveal from '../components/Reveal.jsx'
import { SITE } from '../data/site.js'
import CtaBand from '../components/CtaBand.jsx'

export default function Testimonials() {
  useSeo('Testimonials | CFE Companies', 'What clients say about working with CFE Companies.')
  return (
    <>
      <PageHero eyebrow="Testimonials" title="In our clients' words." />
      <section className="section section--tight">
        <div className="container"><TestimonialsView /></div>
      </section>
      <TrustSection />
      <section className="section">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Our Specialties</p></Reveal>
          <Reveal delay={80} className="col-5">
            <h2 className="h-section">What we do best.</h2>
            <ul className="rule-list specialties-list">{SITE.specialties.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
          <Reveal delay={140} className="col-4"><p className="free">{SITE.freeNote}</p><p className="body-p">{SITE.welcome[1]}</p></Reveal>
        </div>
      </section>
      <CtaBand title="Become our next success story." />
    </>
  )
}
