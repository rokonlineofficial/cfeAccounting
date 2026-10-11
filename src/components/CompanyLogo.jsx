import companies from '../assets/logos/cfe-companies.webp'
import tax from '../assets/logos/cfe-tax-services.webp'
import realestate from '../assets/logos/cfe-real-estate.webp'
import publishing from '../assets/logos/cfe-publishing.webp'
import consulting from '../assets/logos/cfe-consulting.webp'

const map = { companies, tax, realestate, publishing, consulting }

export default function CompanyLogo({ company }) {
  const src = company.logo && map[company.logo]
  if (!src) {
    return (
      <div className="co-logo co-logo--text" aria-hidden="true">
        <span>{company.name}</span>
      </div>
    )
  }
  return (
    <div className="co-logo" data-tilt>
      <img src={src} alt={`${company.name} logo`} loading="lazy" />
    </div>
  )
}
