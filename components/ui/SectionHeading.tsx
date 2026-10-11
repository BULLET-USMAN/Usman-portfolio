import { cn } from '@/lib/utils'
import { SectionMark } from '@/components/ui/SectionMark'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** Shows the small ring+dot brand mark next to the eyebrow — ties the section visually back to the nav/hero. */
  mark?: boolean
  className?: string
}

/** Shared heading block: eyebrow label + display title + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  mark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <div className={cn('flex items-center gap-2.5', align === 'center' && 'justify-center')}>
        {mark && <SectionMark />}
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  )
}
