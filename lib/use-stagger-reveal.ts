'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface UseStaggerRevealOptions {
  /** Selector for the children to reveal, scoped to the container ref. */
  selector: string
  /** Starting vertical offset in pixels, animated to 0. */
  y?: number
  /** Delay between each child's animation, in seconds. */
  stagger?: number
  /** ScrollTrigger `start` position. */
  start?: string
}

/**
 * Fades + slides a group of child elements in, once, when the container
 * scrolls into view. Respects `prefers-reduced-motion` (skips straight to
 * the end state). Shared by any section that needs a staggered card/grid
 * reveal — see About's stat and focus-area grids for the first use.
 */
export function useStaggerReveal<T extends HTMLElement>({
  selector,
  y = 24,
  stagger = 0.08,
  start = 'top 82%',
}: UseStaggerRevealOptions) {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>(selector)
    if (targets.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    gsap.set(targets, { opacity: 0, y })
    const trigger = ScrollTrigger.create({
      trigger: container,
      start,
      once: true,
      onEnter: () => {
        gsap.to(targets, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger })
      },
    })

    return () => trigger.kill()
  }, [selector, y, stagger, start])

  return containerRef
}
