'use client'

import type { ReactNode } from 'react'
import { useStaggerReveal } from '@/lib/use-stagger-reveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/utils'

export interface IconCardItem {
  icon: ReactNode
  title: string
  description: string
  /** Optional small badge shown next to the title (e.g. a status label). */
  badge?: ReactNode
}

interface IconCardGridProps {
  items: IconCardItem[]
  columns?: 2 | 3
}

/** Reveals a grid of icon+title+description cards on scroll. Icon resolution stays with the caller. */
export function IconCardGrid({ items, columns = 3 }: IconCardGridProps) {
  const containerRef = useStaggerReveal<HTMLDivElement>({ selector: '[data-reveal]', stagger: 0.06 })

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2',
        columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
      )}
    >
      {items.map((item) => (
        <GlassCard key={item.title} interactive data-reveal className="p-6">
          <div className="flex items-start justify-between gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-line">
              {item.icon}
            </span>
            {item.badge}
          </div>
          <h4 className="mt-4 font-display text-base font-medium text-text-primary">
            {item.title}
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.description}</p>
        </GlassCard>
      ))}
    </div>
  )
}
