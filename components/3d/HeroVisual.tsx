'use client'

import dynamic from 'next/dynamic'
import { useDeviceTier } from '@/lib/device-tier'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { StaticGlow } from '@/components/3d/fallback/StaticGlow'
import { HeroErrorBoundary } from '@/components/3d/HeroErrorBoundary'

// Code-split the Three.js/R3F bundle out of the main chunk — it only
// loads once we've confirmed the device can handle it.
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <StaticGlow />,
})

/**
 * Decides, per device, whether to render the WebGL scene or the static
 * CSS fallback. Reduced-motion and low-tier devices always get the
 * fallback — never the animated canvas. The scene itself is wrapped in
 * an error boundary in case it throws after mounting.
 */
export function HeroVisual() {
  const tier = useDeviceTier()
  const reducedMotion = useReducedMotion()

  if (reducedMotion || tier === 'low') {
    return <StaticGlow />
  }

  return (
    <HeroErrorBoundary>
      <HeroScene tier={tier} />
    </HeroErrorBoundary>
  )
}
