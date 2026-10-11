'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Points } from 'three'
import { THREE_COLORS } from '@/lib/three-theme'

interface ParticleFieldProps {
  count: number
  spread?: number
}

function generatePositions(count: number, spread: number): Float32Array {
  const array = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    // Distribute within a sphere shell so particles read as ambient
    // depth around the core rather than a flat disc.
    const radius = spread * (0.5 + Math.random() * 0.5)
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    array[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    array[i * 3 + 2] = radius * Math.cos(phi)
  }
  return array
}

/**
 * A single THREE.Points cloud drifting almost imperceptibly slowly.
 * One rotation update per frame for the whole group — no per-particle
 * JS work — keeps this essentially free even at higher counts.
 *
 * Positions are randomized once via useState's lazy initializer — the
 * one place React guarantees a function runs exactly once per instance,
 * which is why it's the sanctioned spot for one-time impure work like
 * `Math.random` (render itself, and useMemo, must stay pure/idempotent).
 * Note: if `count`/`spread` ever changed after mount, this component
 * would need to be remounted (e.g. via a `key`) to regenerate — device
 * tier is effectively stable per session, so that's an acceptable trade.
 */
export function ParticleField({ count, spread = 4.2 }: ParticleFieldProps) {
  const pointsRef = useRef<Points>(null)
  const [positions] = useState(() => generatePositions(count, spread))

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.015
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={THREE_COLORS.accent}
        size={0.028}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
