import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from './gsap.js'

// Slow vertical drift of an element (usually an <img>) while its parent scrolls through the viewport.
export default function useParallax(amount = 8) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { yPercent: -amount }, {
        yPercent: amount, ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, el)
    return () => ctx.revert()
  }, [amount])
  return ref
}
