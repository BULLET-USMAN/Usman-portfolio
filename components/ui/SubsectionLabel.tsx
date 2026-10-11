import type { ReactNode } from 'react'

interface SubsectionLabelProps {
  children: ReactNode
}

/** Small mono subsection label used to introduce a group within a section (e.g. "Toolkit", "Skills & learning areas"). */
export function SubsectionLabel({ children }: SubsectionLabelProps) {
  return (
    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">{children}</h3>
  )
}
