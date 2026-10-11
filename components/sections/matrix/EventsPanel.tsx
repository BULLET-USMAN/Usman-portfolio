import { CalendarClock, Trophy } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { EmptyStatePanel } from '@/components/ui/EmptyStatePanel'
import { matrixEvents } from '@/data/matrix.data'

export function EventsPanel() {
  if (matrixEvents.length === 0) {
    return (
      <EmptyStatePanel icon={<CalendarClock className="h-4 w-4" />}>
        Tournament and event history will appear here once added to{' '}
        <code className="font-mono text-text-secondary">data/matrix.data.ts</code>.
      </EmptyStatePanel>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {matrixEvents.map((event) => (
          <GlassCard key={event.name} interactive className="p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-line">
              <Trophy className="h-4 w-4 text-accent" aria-hidden="true" />
            </span>
            {event.date && (
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-accent">
                {event.date}
              </p>
            )}
            <h4 className="mt-2 font-display text-base font-medium text-text-primary">
              {event.name}
            </h4>
            {event.description && (
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                {event.description}
              </p>
            )}
          </GlassCard>
        ))}
      </div>
      <p className="mt-4 text-sm text-text-muted">
        More tournaments in the works.
      </p>
    </div>
  )
}
