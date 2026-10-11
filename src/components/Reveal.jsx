import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from '../lib/gsap.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced()) { gsap.set(el, { autoAlpha: 1 }); return }
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { autoAlpha: 0, y: 56 }, {
        autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: delay / 1000,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [delay])

  return <Tag ref={ref} className={`reveal ${className}`} {...rest}>{children}</Tag>
}
