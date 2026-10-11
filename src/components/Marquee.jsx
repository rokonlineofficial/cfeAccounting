import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger, reduced } from '../lib/gsap.js'

// Endless text ticker. Scrolling speeds it up and flips its direction with the scroll direction.
export default function Marquee({ items, reverse = false }) {
  const track = useRef(null)

  useLayoutEffect(() => {
    const el = track.current
    if (!el || reduced()) return
    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(el, { xPercent: reverse ? -50 : 0 }, { xPercent: reverse ? 0 : -50, ease: 'none', duration: 32, repeat: -1 })
      ScrollTrigger.create({
        trigger: el, start: 'top bottom', end: 'bottom top',
        onUpdate: (self) => {
          const v = Math.min(Math.abs(self.getVelocity()) / 260, 7)
          tween.timeScale(self.direction * (1 + v))
          gsap.to(tween, { timeScale: 1, duration: 1.2, overwrite: true })
        },
      })
    }, el)
    return () => ctx.revert()
  }, [reverse])

  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={track}>
        {[0, 1].map((k) => (
          <div className="marquee__group" key={k}>
            {row.map((t, i) => (<span key={i} className="marquee__item">{t}<i>●</i></span>))}
          </div>
        ))}
      </div>
    </div>
  )
}
