import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, reduced, finePointer } from '../lib/gsap.js'

export default function GlobalMotion() {
  const { pathname } = useLocation()
  const dot = useRef(null)
  const ring = useRef(null)
  const progress = useRef(null)
  const panel = useRef(null)
  const first = useRef(true)

  /* page transition wipe + trigger refresh on every route change */
  useLayoutEffect(() => {
    const p = panel.current
    if (first.current) { first.current = false; return }
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    if (reduced()) return () => clearTimeout(t)
    gsap.killTweensOf(p)
    gsap.set(p, { scaleY: 1, transformOrigin: 'top center' })
    gsap.to(p, { scaleY: 0, duration: 0.85, ease: 'power4.inOut', delay: 0.08 })
    return () => clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    if (reduced()) return
    const cleanups = []

    /* scroll progress bar */
    const bar = gsap.to(progress.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } })
    cleanups.push(() => { bar.scrollTrigger?.kill(); bar.kill() })

    /* header hides on scroll down, returns on scroll up */
    const nav = document.querySelector('.nav')
    const st = ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: (self) => {
        if (!nav || document.body.style.overflow === 'hidden') return
        const hide = self.direction === 1 && self.scroll() > 240
        gsap.to(nav, { yPercent: hide ? -100 : 0, duration: 0.45, ease: 'power3.out', overwrite: true })
      },
    })
    cleanups.push(() => st.kill())

    if (finePointer()) {
      /* cursor follower */
      const xd = gsap.quickTo(dot.current, 'x', { duration: 0.12 }), yd = gsap.quickTo(dot.current, 'y', { duration: 0.12 })
      const xr = gsap.quickTo(ring.current, 'x', { duration: 0.55, ease: 'power3' }), yr = gsap.quickTo(ring.current, 'y', { duration: 0.55, ease: 'power3' })
      gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50, autoAlpha: 0 })
      let shown = false
      let magnet = null
      let tilt = null

      const move = (e) => {
        if (!shown) { shown = true; gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.3 }) }
        xd(e.clientX); yd(e.clientY); xr(e.clientX); yr(e.clientY)

        const hot = e.target.closest?.('a, button, input, .btn, [data-cursor]')
        gsap.to(ring.current, { scale: hot ? 2.2 : 1, backgroundColor: hot ? 'rgba(215,25,32,.14)' : 'rgba(215,25,32,0)', duration: 0.35, overwrite: 'auto' })

        /* magnetic buttons */
        const btn = e.target.closest?.('.btn')
        if (magnet && magnet !== btn) { gsap.to(magnet, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,.45)' }); magnet = null }
        if (btn) {
          const r = btn.getBoundingClientRect()
          gsap.to(btn, { x: (e.clientX - (r.left + r.width / 2)) * 0.28, y: (e.clientY - (r.top + r.height / 2)) * 0.4, duration: 0.35, ease: 'power3.out' })
          magnet = btn
        }

        /* 3D tilt on [data-tilt] */
        const t = e.target.closest?.('[data-tilt]')
        if (tilt && tilt !== t) { gsap.to(tilt, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'power3.out' }); tilt = null }
        if (t) {
          const r = t.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5
          gsap.to(t, { rotationY: px * 12, rotationX: -py * 12, transformPerspective: 900, duration: 0.5, ease: 'power2.out' })
          tilt = t
        }
      }
      const leave = () => { shown = false; gsap.to([dot.current, ring.current], { autoAlpha: 0, duration: 0.2 }) }
      window.addEventListener('pointermove', move, { passive: true })
      document.documentElement.addEventListener('mouseleave', leave)
      cleanups.push(() => { window.removeEventListener('pointermove', move); document.documentElement.removeEventListener('mouseleave', leave) })
    }
    return () => cleanups.forEach((c) => c())
  }, [])

  return (
    <>
      <div className="progress" ref={progress} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
      <div className="wipe" ref={panel} aria-hidden="true" />
    </>
  )
}
