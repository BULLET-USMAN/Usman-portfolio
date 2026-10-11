import { cn } from '@/lib/utils'

interface SectionMarkProps {
  className?: string
}

/** The same ring+dot mark used in the navbar and favicon — a small recurring signature. */
export function SectionMark({ className }: SectionMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent-line',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  )
}
