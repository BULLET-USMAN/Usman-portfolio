import { cn } from '@/lib/utils'
import { SectionMark } from '@/components/ui/SectionMark'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** Shows the small ring+dot brand mark next to the heading. */
  mark?: boolean
  className?: string
}

/** Shared heading block: display title with optional brand mark + description. */
export function SectionHeading({
  title,
  description,
  align = 'left',
  mark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
        {mark && <SectionMark />}
        <h2 className="font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl text-balance">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary text-pretty">{description}</p>
      )}
    </div>
  )
}
