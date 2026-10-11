'use client'

import { Search, ClipboardList, BarChart3, Crosshair, Hash, LayoutList, PackagePlus } from 'lucide-react'
import { useStaggerReveal } from '@/lib/use-stagger-reveal'
import { ecommerceStages } from '@/data/ecommerce.data'
import type { EcommerceStage } from '@/types/content'

const ICONS: Record<EcommerceStage['icon'], React.ComponentType<{ className?: string }>> = {
  search: Search,
  clipboard: ClipboardList,
  chart: BarChart3,
  crosshair: Crosshair,
  hash: Hash,
  list: LayoutList,
  'package-plus': PackagePlus,
}

/**
 * A left-to-right stepper on desktop that becomes a top-to-bottom
 * stepper on mobile via responsive border/flex-direction classes on a
 * single connector element — deliberately plain HTML/CSS rather than a
 * fixed-viewBox SVG, so it reflows naturally instead of needing the
 * scale-compensation the other diagrams required.
 */
export function ResearchPipeline() {
  const containerRef = useStaggerReveal<HTMLDivElement>({
    selector: '[data-reveal]',
    stagger: 0.08,
    y: 16,
  })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-text-muted">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Amazon Operations Workflow
        </span>
        <span>{ecommerceStages.length} stages</span>
      </div>

      <div ref={containerRef} className="flex flex-col lg:flex-row lg:items-start">
        {ecommerceStages.map((stage, i) => {
          const Icon = ICONS[stage.icon]
          const isLast = i === ecommerceStages.length - 1

          return (
            <div key={stage.id} className="flex flex-col lg:flex-1 lg:items-stretch">
              <div data-reveal className="flex flex-col items-center text-center lg:px-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-line bg-surface-glass">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <span className="mt-3 font-mono text-[10px] uppercase tracking-wide text-text-muted">
                  Step {i + 1}
                </span>
                <h4 className="mt-1 font-display text-sm font-medium text-text-primary">
                  {stage.label}
                </h4>
                <p className="mx-auto mt-1 max-w-[11rem] text-xs leading-relaxed text-text-secondary">
                  {stage.description}
                </p>
              </div>

              {!isLast && (
                <div className="flex items-center justify-center py-3 lg:py-0" aria-hidden="true">
                  <div className="h-8 w-px border-l border-dashed border-border-strong lg:mt-6 lg:h-px lg:w-full lg:border-l-0 lg:border-t" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
