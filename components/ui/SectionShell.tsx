import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionShellProps {
  id: string
  children: ReactNode
  /** Slightly elevated background panel, used to alternate rhythm down the page. */
  elevated?: boolean
  className?: string
}

/** Standard vertical rhythm + scroll-anchor wrapper shared by every section. */
export function SectionShell({ id, children, elevated = false, className }: SectionShellProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-28', elevated && 'bg-bg-elevated')}>
      <div className={cn('shell', className)}>{children}</div>
    </section>
  )
}
