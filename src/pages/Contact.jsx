import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactDetails from '../components/ContactSection.jsx'
import { SITE } from '../data/site.js'
import QuoteForm from '../components/QuoteForm.jsx'

export default function Contact() {
  useSeo('Contact & Free Quote | CFE Companies', 'Request a free estimation from CFE Companies in Charlotte, NC. Email zca@cfeaccounting.com.')
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." />
      <section className="section section--tight">
        <div className="container grid">
          <Reveal className="col-4">
            <ContactDetails />
            <a className="u-link" href={SITE.directions} target="_blank" rel="noopener noreferrer">Get directions</a>
            <p className="free">{SITE.freeNote}</p>
            <p className="body-p">{SITE.contactNote}</p>
          </Reveal>
          <Reveal delay={100} className="col-7 col-start-6" id="quote">
            <p className="label label--red">Free Estimation</p>
            <h2 className="h-section">Request A Quote</h2>
            <p className="body-p">Tell us about your business so we can prepare your estimate: team size, invoice volume and your website.</p>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
