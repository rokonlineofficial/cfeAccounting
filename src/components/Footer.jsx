import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { SITE } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">

      <style>{`
        .cfe-footer-top {
          display: grid;
          grid-template-columns: minmax(0, 1.8fr) minmax(160px, .7fr) minmax(220px, 1fr);
          gap: 60px;
          align-items: start;
        }

        .cfe-footer-brand {
          max-width: 420px;
        }

        .cfe-footer-nav,
        .cfe-footer-contact {
          min-width: 0;
        }

        .cfe-footer-nav ul,
        .cfe-footer-contact ul {
          margin-top: 16px;
        }

        .cfe-footer-contact address {
          line-height: 1.6;
        }

        .cfe-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .cfe-footer-top {
            grid-template-columns: 1.4fr 1fr;
            gap: 48px 40px;
          }

          .cfe-footer-brand {
            grid-column: 1 / -1;
          }

          .cfe-footer-nav {
            grid-column: 1;
          }

          .cfe-footer-contact {
            grid-column: 2;
          }
        }

        @media (max-width: 767px) {
          .cfe-footer-top {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .cfe-footer-brand,
          .cfe-footer-nav,
          .cfe-footer-contact {
            grid-column: auto;
          }

          .cfe-footer-brand {
            max-width: 300px;
          }

          .cfe-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      <div className="container cfe-footer-top">

        {/* Brand */}
        <div className="cfe-footer-brand">
          <Logo light />

          <p className="footer__tag">
            {SITE.tagline}
          </p>
        </div>


        {/* Navigation */}
        <nav
          className="cfe-footer-nav"
          aria-label="Footer"
        >
          <p className="label">
            Navigate
          </p>

          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/companies">Our Companies</Link>
            </li>

            <li>
              <Link to="/specialties">Specialties</Link>
            </li>

            <li>
              <Link to="/why-choose-us">Why Choose Us</Link>
            </li>

            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>


        {/* Contact */}
        <div className="cfe-footer-contact">
          <p className="label">
            Contact
          </p>

          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>

            <li>
              <address>
                {SITE.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>

      </div>


      {/* Bottom */}
      <div className="container footer__bottom cfe-footer-bottom">

        <p className="label">
          © {new Date().getFullYear()} CFE Accounting. All rights reserved.
        </p>

        <a
          className="label"
          href="https://rokonline.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Rok Online Inc.
        </a>

      </div>

    </footer>
  )
}