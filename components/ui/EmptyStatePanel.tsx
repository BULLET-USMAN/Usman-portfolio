import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EmptyStatePanelProps {
  icon: ReactNode
  children: ReactNode
  className?: string
}

/**
 * A visibly intentional "nothing here yet" state — used anywhere real
 * content (events, sponsors, projects) is empty by design rather than
 * an oversight. Never fabricate an entry to fill this space; a card
 * with sample content reads as a factual claim in a way this doesn't.
 */
export function EmptyStatePanel({ icon, children, className }: EmptyStatePanelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-[var(--radius-md)] border border-dashed border-border-strong bg-surface/30 px-5 py-4 text-sm text-text-muted',
        className
      )}
    >
      <span className="shrink-0 text-accent" aria-hidden="true">
        {icon}
      </span>
      <span>{children}</span>
    </div>
  )
}
