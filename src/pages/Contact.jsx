import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactDetails from '../components/ContactSection.jsx'
import { SITE } from '../data/site.js'
import QuoteForm from '../components/QuoteForm.jsx'

export default function Contact() {
  useSeo(
    'Contact & Free Quote | CFE Companies',
    'Request a free estimation from CFE Companies in Charlotte, NC. Email zca@cfeaccounting.com.'
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
      />

      <section className="contact-section">
        <div className="contact-wrap">

          {/* LEFT — Contact Information */}
          <Reveal className="contact-intro">
            <div className="contact-intro-top">
              <span className="contact-number">01</span>

              <p className="contact-eyebrow">
                Get in touch
              </p>
            </div>

            <h2 className="contact-heading">
              Let's put your
              <br />
              finances in order.
            </h2>

            <p className="contact-description">
              If you want to get a free consultation without any obligation,
              get in touch with CFE Companies. We'll help you understand your
              options and find the right direction for your business.
            </p>

            <div className="contact-info-list">

              {/* Phone */}
              <a
                href="tel:+17044954999"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>

                <span className="contact-info-content">
                  <small>Call us</small>
                  <strong>(704) 495-4999</strong>
                </span>

                <span className="contact-info-arrow">↗</span>
              </a>

              {/* Existing contact details */}
              <div className="contact-existing-details">
                <ContactDetails />
              </div>

              {/* Directions */}
              <a
                className="contact-direction-link"
                href={SITE.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get directions</span>
                <span>↗</span>
              </a>

            </div>

            <div className="contact-note">
              <span className="contact-note-line"></span>
              <p>
                {SITE.contactNote}
              </p>
            </div>
          </Reveal>


          {/* RIGHT — Quote Form */}
          <Reveal
            delay={100}
            className="contact-form-card"
            id="quote"
          >
            <div className="contact-form-header">
              <div>
                <p className="contact-form-label">
                  Free Estimation
                </p>

                <h2 className="contact-form-title">
                  Request
                  <br />
                  A Quote
                </h2>
              </div>

              <span className="contact-form-index">
                02
              </span>
            </div>

            <p className="contact-form-description">
              Tell us about your business so we can prepare your estimate.
              Share your team size, invoice volume and website details.
            </p>

            <div className="contact-form-divider"></div>

            <QuoteForm />

            <p className="contact-form-footer">
              No obligation. Tell us what you need and we'll take it from there.
            </p>
          </Reveal>

        </div>
      </section>
    </>
  )
}