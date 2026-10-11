'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdditiveBlending, type Group } from 'three'
import { gsap } from '@/lib/gsap'
import { THREE_COLORS } from '@/lib/three-theme'
import type { DeviceTier } from '@/lib/device-tier'

interface HeroCoreProps {
  tier: DeviceTier
}

const CORE_RADIUS = 1.25

/**
 * The central form — a wireframe icosahedron with a faint additive-blended
 * "glow" sphere nested inside it. No lights, no postprocessing: the glow
 * is faked cheaply with a low-opacity fill sphere, which is what
 * `meshBasicMaterial` (unlit) is good at.
 */
export function HeroCore({ tier }: HeroCoreProps) {
  const groupRef = useRef<Group>(null)

  useEffect(() => {
    if (!groupRef.current) return
    gsap.fromTo(
      groupRef.current.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      { x: 1, y: 1, z: 1, duration: 1.4, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.09
    groupRef.current.rotation.x += delta * 0.02
  })

  const detail = tier === 'high' ? 1 : 0

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[CORE_RADIUS, detail]} />
        <meshBasicMaterial color={THREE_COLORS.accent} wireframe transparent opacity={0.5} />
      </mesh>
      <mesh>
        <sphereGeometry args={[CORE_RADIUS * 0.82, 16, 16]} />
        <meshBasicMaterial
          color={THREE_COLORS.accent}
          transparent
          opacity={0.06}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
