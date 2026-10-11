import { Home } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { SectionMark } from '@/components/ui/SectionMark'

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center justify-center py-24">
      <div className="shell text-center">
        <div className="flex items-center justify-center gap-2.5">
          <SectionMark />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</span>
        </div>

        <h1 className="mt-5 font-display text-4xl font-medium tracking-tight text-text-primary sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>

        <div className="mt-9 flex justify-center">
          <MagneticButton href="/" variant="primary">
            <span className="flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to home
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
