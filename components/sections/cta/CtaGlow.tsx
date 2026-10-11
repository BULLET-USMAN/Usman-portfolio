'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/lib/use-reduced-motion'

const PARTICLES = [
  { top: '20%', left: '15%', delay: '0s', duration: '7s' },
  { top: '70%', left: '25%', delay: '1.2s', duration: '9s' },
  { top: '35%', left: '80%', delay: '2.4s', duration: '8s' },
  { top: '80%', left: '70%', delay: '0.6s', duration: '10s' },
  { top: '15%', left: '55%', delay: '3s', duration: '7.5s' },
]

/**
 * Purely decorative background: one radial-gradient glow blob that
 * drifts a few pixels toward the cursor, plus a handful of CSS-keyframe
 * particles. No canvas, no per-frame JS — the parallax just sets two
 * CSS custom properties on pointer move. Respects reduced-motion both
 * here (skips the pointer listener and particles) and via the global
 * CSS rule in globals.css that neutralizes all animation durations.
 */
export function CtaGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    function handleMove(event: PointerEvent) {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      glowRef.current?.style.setProperty('--parallax-x', `${x * 16}px`)
      glowRef.current?.style.setProperty('--parallax-y', `${y * 12}px`)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [reducedMotion])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] rounded-full transition-transform duration-300 ease-out"
        style={{
          transform:
            'translate(calc(-50% + var(--parallax-x, 0px)), calc(-50% + var(--parallax-y, 0px)))',
          background: 'radial-gradient(circle at center, var(--color-accent-dim) 0%, transparent 65%)',
        }}
      />

      {!reducedMotion &&
        PARTICLES.map((particle, i) => (
          <span
            key={i}
            className="animate-float absolute h-1 w-1 rounded-full bg-accent opacity-40"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
    </div>
  )
}
