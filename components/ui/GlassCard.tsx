import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a hover lift + border glow. Use for interactive/clickable cards only. */
  interactive?: boolean
}

/**
 * The one glassmorphism surface used across the site — nav, floating 3D
 * panels, stat cards, skill chips. Deliberately not used for whole
 * sections; most of the page stays flat.
 */
export function GlassCard({ className, interactive = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border border-border bg-surface-glass backdrop-blur-md',
        interactive &&
          'transition-colors duration-300 hover:border-border-strong hover:bg-white/[0.06]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
