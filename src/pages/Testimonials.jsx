import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Amanda Reed',
    title: 'Business Owner',
    company: 'Northstar Retail',
    review:
      'CFE Companies helped us bring structure to our accounting and gave us a much clearer understanding of where our business was financially. The process was professional, organized and easy to follow.',
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
      'Working with CFE Companies gave us confidence in our financial reporting and planning. They are responsive, knowledgeable and genuinely focused on helping our business move forward.',
  },
  {
    name: 'Jose Johnson',
    title: 'Owner',
    company: 'Johnson Healthcare',
    review:
      'From tax planning to day-to-day accounting support, CFE Companies has been a reliable partner for our business. They make complicated financial matters much easier to understand.',
  },
  {
    name: 'Rebecca Harrison',
    title: 'Operations Director',
    company: 'Harrison Properties',
    review:
      'We needed a team that could understand the details of our business and keep everything organized. CFE Companies delivered exactly that and has been a valuable part of our growth.',
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
    <div className="testimonials-slider">

      {/* Top label */}
      <div className="testimonials-slider__top">
        <p className="label label--red">
          Client Testimonials
        </p>

        <span className="testimonials-slider__counter">
          {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </span>
      </div>

      {/* This should be ABOVE the testimonial */}
      <div className="testimonials-slider__heading">
        <p className="label">
          What our clients say
        </p>
      </div>

      {/* Testimonial */}
      <div className="testimonials-slider__viewport">
        <div key={active} className="testi testimonials-slider__item">

          <span className="testi__mark">
            “
          </span>

          <blockquote className="testi__quote">
            {item.review}

            <footer>
              <b>{item.name}</b>
              <br />
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
  )
}