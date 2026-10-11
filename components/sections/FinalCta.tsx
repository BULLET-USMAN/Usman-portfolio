'use client'

import { useStaggerReveal } from '@/lib/use-stagger-reveal'
import { SectionMark } from '@/components/ui/SectionMark'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { CtaGlow } from '@/components/sections/cta/CtaGlow'
import { siteConfig } from '@/data/site.config'
import { matrixCta } from '@/data/matrix.data'

export function FinalCta() {
  const { eyebrow, headline, description, primaryCta } = siteConfig.finalCta
  const containerRef = useStaggerReveal<HTMLDivElement>({
    selector: '[data-reveal]',
    stagger: 0.12,
    y: 20,
    start: 'top 78%',
  })

  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <CtaGlow />

      <div ref={containerRef} className="shell relative z-10 mx-auto max-w-2xl text-center">
        <div data-reveal className="flex items-center justify-center gap-2.5">
          <SectionMark />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </div>

        <h2
          data-reveal
          className="mt-5 font-display text-4xl font-medium uppercase leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
        >
          {headline}
        </h2>

        <p data-reveal className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>

        <div data-reveal className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </MagneticButton>
          <MagneticButton href={matrixCta.href} variant="secondary">
            {matrixCta.label}
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
