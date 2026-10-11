import { Handshake } from 'lucide-react'
import { EmptyStatePanel } from '@/components/ui/EmptyStatePanel'
import { matrixSponsors } from '@/data/matrix.data'

export function SponsorsPanel() {
  if (matrixSponsors.length === 0) {
    return (
      <EmptyStatePanel icon={<Handshake className="h-4 w-4" />}>
        Sponsor and partner logos will appear here once added to{' '}
        <code className="font-mono text-text-secondary">data/matrix.data.ts</code>.
      </EmptyStatePanel>
    )
  }

  return (
    <div className="flex flex-wrap gap-3">
      {matrixSponsors.map((sponsor) =>
        sponsor.href ? (
          <a
            key={sponsor.name}
            href={sponsor.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:border-accent-line hover:text-accent"
          >
            {sponsor.name}
          </a>
        ) : (
          <span
            key={sponsor.name}
            className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary"
          >
            {sponsor.name}
          </span>
        )
      )}
    </div>
  )
}
