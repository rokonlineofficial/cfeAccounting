import { clients } from '../data/clients.js'

export default function ClientLogos() {
  if (clients.length === 0) {
    return (
      <div className="empty empty--compact">
        <p className="empty__title">Selected clients</p>
        <p className="empty__text">Client logos will be shown here once supplied from the reference material.</p>
      </div>
    )
  }
  return (
    <ul className="logos">
      {clients.map((c) => (
        <li key={c.name}><img src={c.logo} alt={c.name} loading="lazy" /></li>
      ))}
    </ul>
  )
}
