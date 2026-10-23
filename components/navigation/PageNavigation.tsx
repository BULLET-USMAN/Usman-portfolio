import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/utils'

interface PageNavigationProps {
  prev?: { label: string; href: string }
  next?: { label: string; href: string }
  className?: string
}

export function PageNavigation({ prev, next, className }: PageNavigationProps) {
  return (
    <div className={cn('shell pb-20 pt-8', className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link href={prev.href} className="group flex-1">
            <GlassCard interactive className="p-4 sm:p-5">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors group-hover:text-accent">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous
              </span>
              <p className="mt-1 font-display text-base font-medium text-text-primary group-hover:text-accent">
                {prev.label}
              </p>
            </GlassCard>
          </Link>
        ) : (
          <div className="hidden sm:block sm:flex-1" />
        )}

        {next && (
          <Link href={next.href} className="group flex-1 text-right">
            <GlassCard interactive className="p-4 sm:p-5">
              <span className="flex items-center justify-end gap-1.5 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors group-hover:text-accent">
                Next
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <p className="mt-1 font-display text-base font-medium text-text-primary group-hover:text-accent">
                {next.label}
              </p>
            </GlassCard>
          </Link>
        )}
      </div>
    </div>
  )
}
