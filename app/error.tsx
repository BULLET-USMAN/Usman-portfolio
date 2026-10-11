'use client'

import { useEffect } from 'react'
import { RotateCcw } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { SectionMark } from '@/components/ui/SectionMark'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Logged for now; wire up real error reporting here if one is added later.
    console.error(error)
  }, [error])

  return (
    <section className="flex min-h-[70svh] items-center justify-center py-24">
      <div className="shell text-center">
        <div className="flex items-center justify-center gap-2.5">
          <SectionMark />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Error</span>
        </div>

        <h1 className="mt-5 font-display text-4xl font-medium tracking-tight text-text-primary sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-secondary">
          An unexpected error occurred. You can try again, or head back to the homepage.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent/90"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Try again
          </button>
          <MagneticButton href="/" variant="secondary">
            Back to home
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
