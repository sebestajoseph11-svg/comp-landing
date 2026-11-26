import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const pick = () => {
      const marker = Math.min(Math.max(window.innerHeight * 0.34, 140), 360)
      let current = ''

      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) current = id
      }

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom && ids.length) current = ids[ids.length - 1]

      setActive((previous) => (previous === current ? previous : current))
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    window.addEventListener('resize', pick)
    return () => {
      window.removeEventListener('scroll', pick)
      window.removeEventListener('resize', pick)
    }
  }, [ids])

  return active
}
