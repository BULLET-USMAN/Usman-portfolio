'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useHeroScrollStore } from '@/lib/hero-scroll-store'
import { siteConfig } from '@/data/site.config'
import { Badge } from '@/components/ui/Badge'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { HeroVisual } from '@/components/3d/HeroVisual'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const words = headlineRef.current?.querySelectorAll('[data-word]')

    if (words && words.length > 0) {
      if (reduced) {
        gsap.set(words, { opacity: 1, y: 0 })
      } else {
        gsap.fromTo(
          words,
          { opacity: 0, y: '100%' },
          {
            opacity: 1,
            y: '0%',
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            delay: 0.15,
          }
        )
      }
    }

    // Drives the 3D scene's scroll pull-back (see CameraRig) — scoped to
    // the hero's own height, not the whole page, so the effect completes
    // exactly as the hero scrolls out of view.
    if (reduced || !sectionRef.current) return
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => useHeroScrollStore.getState().setProgress(self.progress),
    })

    return () => trigger.kill()
  }, [])

  const nameWords = siteConfig.name.split(' ')

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* 3D layer — sits behind everything, never intercepts pointer events */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <HeroVisual />
      </div>

      {/* Readability scrims: vertical stack behind full-width mobile text,
          horizontal fade behind the left-aligned text column on desktop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-bg via-bg/85 to-bg lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-bg via-bg/75 to-transparent lg:block"
      />

      <div className="shell relative z-10 w-full">
        <div className="max-w-2xl">
          <Badge dot className="mb-6">
            {siteConfig.availability.label}
          </Badge>

          <h1
            ref={headlineRef}
            className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-text-primary sm:text-6xl md:text-7xl"
          >
            {nameWords.map((word) => (
              <span key={word} className="block overflow-hidden">
                <span data-word className="inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl font-mono text-sm text-accent sm:text-base">
            {siteConfig.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href={siteConfig.heroCtas.primary.href} variant="primary">
              {siteConfig.heroCtas.primary.label}
            </MagneticButton>
            <MagneticButton href={siteConfig.heroCtas.secondary.href} variant="secondary">
              {siteConfig.heroCtas.secondary.label}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
