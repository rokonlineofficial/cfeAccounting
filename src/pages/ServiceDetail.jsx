import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useSeo from '../lib/useSeo.js'
import { services, getService } from '../data/services.js'
import Reveal from '../components/Reveal.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import { SITE } from '../data/site.js'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  useSeo(service ? `${service.name} | CFE Accounting` : 'Service not found | CFE Accounting', service ? service.short : 'This service page could not be found.')
  if (!service) return <NotFound />

  const i = services.indexOf(service)
  const sentences = service.detail.split(/(?<=[.!?])\s+/).filter(Boolean)
  const related = services.filter((x) => x.group === service.group && x.slug !== service.slug).slice(0, 4)
  const prev = services[(i - 1 + services.length) % services.length]
  const next = services[(i + 1) % services.length]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="grid">
            <p className="label col-3"><Link to="/services" className="back"><ArrowLeft size={14} /> All services</Link></p>
            <div className="col-9">
              <p className="label label--red">Service {String(i + 1).padStart(2, '0')} · {service.group}</p>
              <h1 className="h-page">{service.name}</h1>
              <p className="lead">{service.short}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Overview</p></Reveal>
          <Reveal delay={80} className="col-7"><p className="detail__text">{service.detail}</p>
            <Link to="/contact#quote" className="btn btn--red">Request a Quote <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {sentences.length > 1 && (
        <section className="section section--tight included">
          <div className="container grid">
            <Reveal className="col-3"><p className="label label--red">In this service</p></Reveal>
            <Reveal delay={80} className="col-9">
              <ol className="steps">{sentences.map((x, n) => (<li key={n}><span className="service__num">{String(n + 1).padStart(2, '0')}</span><p>{x}</p></li>))}</ol>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container grid">
          <Reveal className="col-3"><p className="label label--red">Good to know</p></Reveal>
          <Reveal delay={80} className="col-9 good">
            <p className="free">{SITE.freeNote}</p>
            <p className="body-p">{SITE.contactNote}</p>
            <p className="body-p">Email <a className="u-link u-link--inline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <p className="label label--red related__label">More in {service.group}</p>
            <ServicesGrid items={related} />
          </div>
        </section>
      )}

      <section className="pager">
        <div className="container grid">
          <Link to={`/services/${prev.slug}`} className="pager__item col-6">
            <span className="label"><ArrowLeft size={14} /> Previous</span>
            <span className="pager__name">{prev.name}</span>
          </Link>
          <Link to={`/services/${next.slug}`} className="pager__item pager__item--next col-6">
            <span className="label">Next <ArrowRight size={14} /></span>
            <span className="pager__name">{next.name}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
