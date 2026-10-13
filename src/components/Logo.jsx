import { Link } from 'react-router-dom'
import logo from '../assets/logos/cfe-accounting-logo.png'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="CFE Accounting home">
      <img className="logo__img" src={logo} alt="CFE Accounting — Getting Your Financial Life In Order" width="180" height="126" />
    </Link>
  )
}
