import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact#quote" className="btn btn--red nav__cta">Get a Quote</Link>
        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="container drawer__inner" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} className="drawer__link" tabIndex={open ? 0 : -1}>
              <span className="label">0{i + 1}</span>{l.label}
            </NavLink>
          ))}
          <Link to="/contact#quote" className="btn btn--red drawer__cta" tabIndex={open ? 0 : -1}>
            Get a Quote <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
