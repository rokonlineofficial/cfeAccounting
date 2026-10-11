import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import WhyList from '../components/WhyList.jsx'
import TrustSection from '../components/TrustSection.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function WhyChooseUs() {
  useSeo('Why Choose Us | CFE Companies', 'Accurate record keeping, always on time, 24/7 availability and maximum profitability: why clients choose CFE Companies.')
  return (
    <>
      <PageHero eyebrow="Why Choose Us" title="Seven reasons, no filler." />
      <section className="section section--tight">
        <div className="container"><WhyList /></div>
      </section>
      <TrustSection />
      <CtaBand title="See the difference in your books." />
    </>
  )
}
