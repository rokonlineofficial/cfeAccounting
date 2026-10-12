import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { SITE } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid footer__top">
        <div className="col-5">
          <Logo light />
          <p className="footer__tag">{SITE.tagline}</p>
        </div>
        <nav className="col-3 col-start-7" aria-label="Footer">
          <p className="label">Navigate</p>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/companies">Our Companies</Link></li>
            <li><Link to="/specialties">Specialties</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="col-3">
          <p className="label">Contact</p>
          <ul>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><address>{SITE.address.map((l) => <span key={l}>{l}<br /></span>)}</address></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p className="label">© {new Date().getFullYear()} CFE Companies. All rights reserved.</p>
        <a className="label" href="https://rokonline.com" target="_blank" rel="noopener noreferrer">
          Developed by Rok Online Inc.
        </a>
      </div>
    </footer>
  )
}
