'use client'

import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import type { Group } from 'three'
import { gsap } from '@/lib/gsap'
import { useMediaQuery } from '@/lib/use-media-query'
import type { DeviceTier } from '@/lib/device-tier'
import { HeroCore } from '@/components/3d/HeroCore'
import { OrbitingPillar } from '@/components/3d/OrbitingPillar'
import { ParticleField } from '@/components/3d/ParticleField'
import { CameraRig } from '@/components/3d/CameraRig'

interface HeroSceneProps {
  tier: DeviceTier
}

// The three domains, as geometry rather than color or text —
// same accent, same material, distinguished only by shape and orbit.
const PILLARS = [
  { shape: 'octahedron' as const, radius: 2.15, speed: 0.12, phase: 0, tilt: 0.35, entranceDelay: 0 },
  { shape: 'ring' as const, radius: 2.55, speed: -0.09, phase: 2.1, tilt: -0.5, entranceDelay: 0.12 },
  { shape: 'box' as const, radius: 1.95, speed: 0.15, phase: 4.2, tilt: 0.15, entranceDelay: 0.24 },
]

function SceneContents({ tier }: { tier: DeviceTier }) {
  const groupRef = useRef<Group>(null)
  const isWide = useMediaQuery('(min-width: 1024px)')
  const particleCount = tier === 'high' ? 90 : 45

  useEffect(() => {
    if (!groupRef.current) return
    gsap.to(groupRef.current.position, {
      x: isWide ? 2 : 0,
      duration: 1.2,
      ease: 'power3.out',
    })
  }, [isWide])

  return (
    <>
      <CameraRig enableParallax={tier === 'high'} />
      <group ref={groupRef}>
        <HeroCore tier={tier} />
        {PILLARS.map((pillar) => (
          <OrbitingPillar key={pillar.shape} {...pillar} />
        ))}
        <ParticleField count={particleCount} />
      </group>
    </>
  )
}

/**
 * The full hero composition: a central core with three orbiting pillars
 * (esports / cybersecurity / e-commerce, distinguished by shape, not
 * color) and a sparse ambient particle field. No scene lights are used —
 * every material is unlit (`meshBasicMaterial`), which keeps this cheap
 * and sidesteps needing real postprocessing for the "glow" look.
 */
export default function HeroScene({ tier }: HeroSceneProps) {
  return (
    <Canvas
      dpr={tier === 'high' ? [1, 2] : 1}
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      gl={{ antialias: tier === 'high', alpha: true }}
    >
      <SceneContents tier={tier} />
    </Canvas>
  )
}
