import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CtaBand({ title = 'Ready to get your financial life in order?' }) {
  return (
    <section className="cta">
      <div className="container grid">
        <Reveal className="col-8"><h2 className="h-section cta__title">{title}</h2></Reveal>
        <Reveal delay={100} className="col-4 cta__action">
          <p className="label">Free Estimation</p>
          <Link to="/contact#quote" className="btn btn--red">Request a Quote <ArrowUpRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  )
}
