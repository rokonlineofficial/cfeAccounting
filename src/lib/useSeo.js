import { useEffect } from 'react'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [k, v] = selector.replace(/meta\[|\]|"/g, '').split('=')
    el.setAttribute(k, v)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function useSeo(title, description) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
  }, [title, description])
}
