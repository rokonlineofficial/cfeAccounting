import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Amanda Reed',
    title: 'Business Owner',
    company: 'Northstar Retail',
    review:
      'CFE Accounting helped us bring structure to our accounting and gave us a much clearer understanding of where our business was financially. The process was professional, organized and easy to follow.',
  },
  {
    name: 'Michael Carter',
    title: 'Founder & CEO',
    company: 'Carter Business Group',
    review:
      'The team took the time to understand our business instead of giving us a one-size-fits-all solution. Their guidance has made managing our financial responsibilities much easier.',
  },
  {
    name: 'Nicole Petersen',
    title: 'Managing Director',
    company: 'Petersen Consulting',
    review:
      'Working with CFE Accounting gave us confidence in our financial reporting and planning. They are responsive, knowledgeable and genuinely focused on helping our business move forward.',
  },
  {
    name: 'Jose Johnson',
    title: 'Owner',
    company: 'Johnson Healthcare',
    review:
      'From tax planning to day-to-day accounting support, CFE Accounting has been a reliable partner for our business. They make complicated financial matters much easier to understand.',
  },
  {
    name: 'Rebecca Harrison',
    title: 'Operations Director',
    company: 'Harrison Properties',
    review:
      'We needed a team that could understand the details of our business and keep everything organized. CFE Accounting delivered exactly that and has been a valuable part of our growth.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const item = testimonials[active]

  return (
    <>
      <style>{`
        .testimonials-slider {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 0 10px;
        }

        .testimonials-slider__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--line);
        }

        .testimonials-slider__top .label {
          margin: 0;
        }

        .testimonials-slider__counter {
          color: var(--ink2);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .08em;
          white-space: nowrap;
        }

        .testimonials-slider__heading {
          text-align: center;
          padding: 55px 20px 38px;
        }

        .testimonials-slider__heading .label {
          margin: 0;
          color: var(--ink2);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .testimonials-slider__viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .testimonials-slider__item {
          position: relative;
          min-height: 390px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 70px clamp(24px, 7vw, 100px);
          border: 1px solid var(--line);
          background: var(--paper);
          text-align: center;
          animation: testimonialEnter .55s ease both;
        }

        .testi__mark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin-bottom: 30px;
          border-radius: 50%;
          background: var(--red);
          color: #fff;
          font-family: Georgia, serif;
          font-size: 42px;
          line-height: 1;
          padding-top: 12px;
        }

        .testi__quote {
          width: 100%;
          max-width: 820px;
          margin: 0;
          color: var(--ink);
          font-size: clamp(1.45rem, 3vw, 2.65rem);
          line-height: 1.22;
          letter-spacing: -.035em;
          font-weight: 700;
        }

        .testi__quote footer {
          margin-top: 42px;
          padding-top: 22px;
          border-top: 1px solid var(--line);
          color: var(--ink2);
          font-size: 14px;
          line-height: 1.6;
          letter-spacing: 0;
          font-weight: 400;
        }

        .testi__quote footer b {
          display: block;
          margin-bottom: 3px;
          color: var(--ink);
          font-size: 16px;
          font-weight: 700;
        }

        .testimonials-slider__controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
        }

        .testimonials-slider__controls button {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          padding: 0;
          border: 1px solid var(--ink);
          border-radius: 50%;
          background: transparent;
          color: var(--ink);
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          transition:
            background-color .2s ease,
            color .2s ease,
            transform .2s ease;
        }

        .testimonials-slider__controls button:hover {
          background: var(--ink);
          color: var(--paper);
          transform: translateY(-2px);
        }

        @keyframes testimonialEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .testimonials-slider {
            padding: 10px 0;
          }

          .testimonials-slider__top {
            padding-bottom: 18px;
          }

          .testimonials-slider__heading {
            padding: 38px 10px 28px;
          }

          .testimonials-slider__item {
            min-height: 420px;
            padding: 48px 22px;
          }

          .testi__mark {
            width: 50px;
            height: 50px;
            margin-bottom: 24px;
            font-size: 36px;
          }

          .testi__quote {
            font-size: 1.45rem;
            line-height: 1.3;
          }

          .testi__quote footer {
            margin-top: 32px;
            padding-top: 18px;
            font-size: 13px;
          }

          .testi__quote footer b {
            font-size: 15px;
          }

          .testimonials-slider__controls {
            margin-top: 22px;
          }

          .testimonials-slider__controls button {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <div className="testimonials-slider">

        {/* Top label + counter */}
        <div className="testimonials-slider__top">
          <p className="label label--red">
            Client Testimonials
          </p>

          <span className="testimonials-slider__counter">
            {String(active + 1).padStart(2, '0')} /{' '}
            {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        {/* Heading */}
        <div className="testimonials-slider__heading">
          <p className="label">
            What our clients say
          </p>
        </div>

        {/* Testimonial */}
        <div
          className="testimonials-slider__viewport"
          aria-live="polite"
        >
          <div
            key={active}
            className="testi testimonials-slider__item"
          >
            <span className="testi__mark">
              “
            </span>

            <blockquote className="testi__quote">
              {item.review}

              <footer>
                <b>{item.name}</b>
                {item.title} · {item.company}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Navigation */}
        <div className="testi__nav testimonials-slider__controls">

          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
          >
            →
          </button>

        </div>

      </div>
    </>
  )
}