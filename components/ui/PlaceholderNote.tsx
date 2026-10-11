import { Construction } from 'lucide-react'

interface PlaceholderNoteProps {
  phase: string
}

/**
 * Visibly marks a section as scaffolded-but-not-built-yet. This should
 * never ship to a real visitor — it exists so section shells can be wired
 * into navigation/layout ahead of their content phase.
 */
export function PlaceholderNote({ phase }: PlaceholderNoteProps) {
  return (
    <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-dashed border-border-strong bg-surface/40 px-5 py-4 text-sm text-text-muted">
      <Construction className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
      <span>
        Content for this section arrives in <span className="text-text-secondary">{phase}</span>.
        Structure, spacing, and navigation are already wired up.
      </span>
    </div>
  )
}
