import { Link } from 'react-router-dom'
import useSeo from '../lib/useSeo.js'

export default function NotFound() {
  useSeo('Page not found | CFE Companies', 'The page you are looking for could not be found.')
  return (
    <section className="page-hero">
      <div className="container">
        <p className="label label--red">404</p>
        <h1 className="h-page">Page not found.</h1>
        <p className="lead"><Link to="/" className="u-link">Back to home</Link></p>
      </div>
    </section>
  )
}
