import useSeo from '../lib/useSeo.js'
import PageHero from '../components/PageHero.jsx'
import WhyList from '../components/WhyList.jsx'
import TrustSection from '../components/TrustSection.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function WhyChooseUs() {
  useSeo(
    'Why Choose Us | CFE Accounting',
    'Accurate record keeping, always on time, 24/7 availability and maximum profitability: why clients choose CFE Accounting.'
  )

  return (
    <>
      <style>{`
        .why-page {
          width: 100%;
          overflow: hidden;
        }

        .why-page .why-list {
          width: 100%;
        }

        .why-page .why-list__row {
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 767px) {
          .why-page .section {
            padding-block: 56px;
          }

          .why-page .section--tight {
            padding-top: 40px;
          }

          .why-page .why-list__row {
            grid-template-columns: 64px 1fr;
            gap: 12px;
            padding: 24px 0;
          }

          .why-page .why-list__dash {
            display: none;
          }

          .why-page .why-list__num {
            font-size: 3rem;
          }

          .why-page .why-list__title {
            font-size: 1.8rem;
            line-height: 1.05;
          }
        }

        @media (max-width: 480px) {
          .why-page .why-list__row {
            grid-template-columns: 52px 1fr;
            gap: 10px;
            padding: 22px 0;
          }

          .why-page .why-list__num {
            font-size: 2.5rem;
          }

          .why-page .why-list__title {
            font-size: 1.55rem;
          }
        }
      `}</style>

      <div className="why-page">

        <PageHero
          eyebrow="Why Choose Us"
          title="Seven reasons, no filler."
        />

        <section className="section section--tight">
          <div className="container">
            <WhyList />
          </div>
        </section>

        <TrustSection />

        <CtaBand title="See the difference in your books." />

      </div>
    </>
  )
}