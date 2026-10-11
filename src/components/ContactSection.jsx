import { Mail, MapPin } from 'lucide-react'
import { SITE } from '../data/site.js'

export default function ContactDetails() {
  return (
    <ul className="contact-list">
      <li>
        <Mail size={18} aria-hidden="true" />
        <div>
          <p className="label">Email</p>
          <a className="u-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </li>
      <li>
        <MapPin size={18} aria-hidden="true" />
        <div>
          <p className="label">Address</p>
          <address>{SITE.address.map((l) => <span key={l}>{l}<br /></span>)}</address>
        </div>
      </li>
      {SITE.socials.length > 0 && (
        <li>
          <span className="contact-list__spacer" />
          <div>
            <p className="label">Social</p>
            <p>{SITE.socials.map((s) => <a key={s.href} className="u-link" href={s.href} target="_blank" rel="noopener noreferrer">{s.label} </a>)}</p>
          </div>
        </li>
      )}
    </ul>
  )
}
