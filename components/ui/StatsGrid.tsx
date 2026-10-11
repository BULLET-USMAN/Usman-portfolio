'use client'

import { useEffect, useRef } from 'react'
import { PenLine } from 'lucide-react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/utils'
import type { Stat } from '@/types/content'

interface StatsGridProps {
  stats: Stat[]
  columns?: 2 | 3
}

/**
 * Generic stat-card grid shared across sections (first used by About,
 * now also Matrix Esports). Every card is one of:
 *
 *  1. A real, non-numeric fact — static reveal, no counting.
 *  2. A number that's true by construction / verifiable from this
 *     site's own content (opt in via `countTo`) — animates on scroll.
 *  3. `isPlaceholder: true` — an unverified metric, rendered with a
 *     visibly different "add your number" treatment. Never animated,
 *     never a fabricated figure.
 */
export function StatsGrid({ stats, columns = 3 }: StatsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const valueRefs = useRef(new Map<string, HTMLSpanElement>())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>('[data-reveal]')
    if (cards.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Text already shows the real value by default (see JSX below) —
      // reduced motion just means skipping the count-up, not the content.
      gsap.set(cards, { opacity: 1, y: 0 })
      return
    }

    gsap.set(cards, { opacity: 0, y: 24 })
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(cards, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 })

        for (const stat of stats) {
          if (stat.countTo === undefined) continue
          const el = valueRefs.current.get(stat.label)
          if (!el) continue
          el.textContent = '0' // reset from the real value, then count up to it
          const counter = { value: 0 }
          gsap.to(counter, {
            value: stat.countTo,
            duration: 1.1,
            delay: 0.15,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(counter.value).toString()
            },
            onComplete: () => {
              // Restores the exact authored string (e.g. "100K+"), since
              // the animation above only ever counts a plain number.
              el.textContent = stat.value
            },
          })
        }
      },
    })

    return () => trigger.kill()
  }, [stats])

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2',
        columns === 3 && 'lg:grid-cols-3'
      )}
    >
      {stats.map((stat) =>
        stat.isPlaceholder ? (
          <div
            key={stat.label}
            data-reveal
            className="rounded-[var(--radius-md)] border border-dashed border-border-strong bg-surface/30 p-6"
          >
            <span className="font-display text-3xl font-medium text-text-muted">{stat.value}</span>
            <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-text-muted">
              <PenLine className="h-3 w-3" aria-hidden="true" />
              Add your number
            </p>
          </div>
        ) : (
          <GlassCard key={stat.label} data-reveal className="p-6">
            <span
              ref={(el) => {
                if (el) valueRefs.current.set(stat.label, el)
                else valueRefs.current.delete(stat.label)
              }}
              className="font-display text-3xl font-medium text-text-primary"
            >
              {stat.value}
            </span>
            <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            {stat.description && (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-text-muted">
                {stat.description}
              </p>
            )}
          </GlassCard>
        )
      )}
    </div>
  )
}
