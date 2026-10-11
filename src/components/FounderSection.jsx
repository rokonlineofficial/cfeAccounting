import { SITE } from '../data/site.js'
import Reveal from './Reveal.jsx'
import useParallax from '../lib/useParallax.js'
import founder from '../assets/images/founder.webp'

export default function FounderSection({ full = false }) {
  const img = useParallax(5)
  return (
    <section className="section founder" aria-labelledby="founder-h">
      <div className="container grid">
        <Reveal className="col-5 founder__photo">
          <div className="photo photo--portrait photo--cutout" data-tilt>
            <img ref={img} src={founder} alt={`Portrait of ${SITE.founder.name}`} width="395" height="532" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={100} className="col-6 col-start-7 founder__text">
          <p className="label label--red">Founder</p>
          <h2 id="founder-h" className="h-section">Meet the CEO &amp; Founder <br /><span className="red">{SITE.founder.name}</span></h2>
          <p className="founder__role label">{SITE.founder.role}</p>
          <p className="lead">
            CFE Companies was founded in {SITE.founded} by managing director {SITE.founder.name} after leaving Corporate America.
          </p>
          {full ? (
            <>
              <h3 className="h-small">Experience across</h3>
              <ul className="tags">{SITE.experience.map((x) => <li key={x}>{x}</li>)}</ul>
              <h3 className="h-small">Expertise and Specializations</h3>
              <ul className="rule-list">{SITE.expertise.map((x) => <li key={x}>{x}</li>)}</ul>
            </>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
