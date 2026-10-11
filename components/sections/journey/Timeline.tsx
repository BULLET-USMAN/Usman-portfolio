'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { journeyStages, JOURNEY_CATEGORY_LABELS } from '@/data/journey.data'
import type { JourneyStage } from '@/types/content'

function categoryBadgeClass(category: JourneyStage['category']) {
  return category === 'future'
    ? 'border-dashed border-border-strong text-text-muted'
    : 'border-accent-line text-accent'
}

export function Timeline() {
  const rootRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const line = lineRef.current
    if (!root || !line) return

    const items = root.querySelectorAll<HTMLElement>('[data-reveal]')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      gsap.set(items, { opacity: 1, x: 0 })
      gsap.set(line, { scaleY: 1 })
      return
    }

    gsap.set(items, { opacity: 0, x: -16 })
    gsap.set(line, { scaleY: 0, transformOrigin: 'top' })

    const revealTrigger = ScrollTrigger.create({
      trigger: root,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(items, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15 })
      },
    })

    const scrubTween = gsap.to(line, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top 75%',
        end: 'bottom 60%',
        scrub: 0.6,
      },
    })

    return () => {
      revealTrigger.kill()
      scrubTween.scrollTrigger?.kill()
      scrubTween.kill()
    }
  }, [])

  return (
    <div ref={rootRef} className="relative">
      {/* Static track */}
      <div
        className="absolute top-1.5 bottom-1.5 left-4 w-px bg-border-strong"
        aria-hidden="true"
      />
      {/* Scroll-scrubbed accent overlay */}
      <div
        ref={lineRef}
        className="absolute top-1.5 bottom-1.5 left-4 w-px bg-accent"
        aria-hidden="true"
      />

      <ol className="space-y-12">
        {journeyStages.map((stage) => (
          <li key={stage.id} data-reveal className="relative pl-12">
            <span
              className={`absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-bg ${
                stage.category === 'future' ? 'border-dashed border-border-strong' : 'border-accent'
              }`}
              aria-hidden="true"
            />

            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${categoryBadgeClass(stage.category)}`}
            >
              {JOURNEY_CATEGORY_LABELS[stage.category]}
            </span>
            <span className="ml-3 font-mono text-xs text-text-muted">{stage.period}</span>

            <h3 className="mt-3 font-display text-xl font-medium text-text-primary">
              {stage.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
              {stage.description}
            </p>

            {stage.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {stage.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {stage.relatedHref && (
              <a
                href={stage.relatedHref}
                className="mt-3 inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
              >
                View section <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
