import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from '../lib/gsap.js'

export default function CountUp({ value }) {
  const ref = useRef(null)
  const m = /^(\d+)(\D*)$/.exec(value)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !m || reduced()) return
    const end = Number(m[1]); const suffix = m[2]
    const start = end > 100 ? end - 40 : 0
    const o = { n: start }
    const ctx = gsap.context(() => {
      el.textContent = start + suffix
      gsap.to(o, {
        n: end, duration: 2, ease: 'power3.out', snap: { n: 1 },
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        onUpdate: () => { el.textContent = o.n + suffix },
      })
    }, el)
    return () => { ctx.revert(); el.textContent = value }
  }, [value])

  return <span ref={ref}>{value}</span>
}
