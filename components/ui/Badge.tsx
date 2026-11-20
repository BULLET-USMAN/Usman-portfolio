import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Adds a small pulsing accent dot — used for live/available status. */
  dot?: boolean
}

/** Mono-set label used for tags, status pills, and skill chips. */
export function Badge({ className, dot = false, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-surface-glass px-3 py-1.5',
        'font-mono text-xs tracking-wide text-text-secondary',
        className
      )}
      {...props}
    >
      {dot && (
        <span className="flex h-2 w-2 items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent-line)]" />
        </span>
      )}
      {children}
    </span>
  )
}
