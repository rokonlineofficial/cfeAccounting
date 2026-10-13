import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight } from 'lucide-react'
import { SITE } from '../data/site.js'
import founder from '../assets/images/founder.webp'
import { gsap, reduced } from '../lib/gsap.js'

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 })
      tl.fromTo('.line__in', { yPercent: 118, rotate: 3 }, { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.13 })
        .fromTo('[data-in]', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, '-=0.8')
        .fromTo('.hero__photo', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut' }, 0.1)
        .fromTo('.hero__photo img', { scale: 1.3 }, { scale: 1, duration: 1.8 }, 0.1)
        .fromTo('.hero__bar', { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.9 }, '-=0.9')
        .fromTo('.dot', { scale: 0 }, { scale: 1, duration: 0.6, ease: 'back.out(3)' }, '-=0.9')

      gsap.to('.hero__photo img', { yPercent: 7, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.h-hero', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={root}>
      <div className="container grid hero__grid">
        <div className="hero__copy col-8">
          <p className="label label--red hero__eyebrow" data-in>CFE Accounting</p>
          <h1 className="h-hero">
            <span className="line"><span className="line__in">Getting Your</span></span>
            <span className="line"><span className="line__in">Financial Life</span></span>
            <span className="line"><span className="line__in">In Order<i className="dot" aria-hidden="true">.</i></span></span>
          </h1>
          <p className="hero__disciplines label" data-in>
            {SITE.disciplines.map((d, i) => (
              <span key={d}>{d.toUpperCase()}{i < SITE.disciplines.length - 1 && <em> · </em>}</span>
            ))}
          </p>
          <div className="hero__actions" data-in>
            <Link to="/contact#quote" className="btn btn--red">Request a Quote</Link>
            <Link to="/services" className="btn btn--ghost">Explore Services <ArrowDownRight size={18} /></Link>
          </div>
        </div>

        <figure className="hero__figure col-4">
          <div className="photo photo--tall photo--cutout hero__photo" data-tilt>
            <img src={founder} alt="Zadih Cadyma, CEO and founder of CFE Accounting" width="395" height="532" fetchpriority="high" />
          </div>
          <span className="hero__bar" aria-hidden="true" />
          <figcaption className="label" data-in>Charlotte, NC · Since {SITE.founded}</figcaption>
        </figure>
      </div>
    </section>
  )
}
