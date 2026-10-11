import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function ServiceItem({ service, index }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <Reveal as="li" delay={(index % 3) * 60} className="service">
      <Link to={`/services/${service.slug}`} className="service__link">
        <span className="service__num">{num}</span>
        <span className="service__body">
          <span className="service__name">{service.name}</span>
          <span className="service__short">{service.short}</span>
        </span>
        <ArrowUpRight className="service__arrow" size={22} aria-hidden="true" />
      </Link>
    </Reveal>
  )
}
