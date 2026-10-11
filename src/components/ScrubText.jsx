import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from '../lib/gsap.js'

// Words light up one by one as the text scrolls through the viewport.
export default function ScrubText({ text, className = '' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.w'), { opacity: 0.14 }, {
        opacity: 1, ease: 'none', stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 48%', scrub: true },
      })
    }, el)
    return () => ctx.revert()
  }, [text])
  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => <span key={i} className="w" aria-hidden="true">{w} </span>)}
    </p>
  )
}
