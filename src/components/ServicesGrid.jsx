import ServiceItem from './ServiceItem.jsx'

export default function ServicesGrid({ items }) {
  return (
    <ul className="services-grid">
      {items.map((s, i) => (
        <ServiceItem key={s.slug} service={s} index={i} />
      ))}
    </ul>
  )
}
