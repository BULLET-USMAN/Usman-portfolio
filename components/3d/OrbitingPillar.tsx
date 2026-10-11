'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'
import { gsap } from '@/lib/gsap'
import { THREE_COLORS } from '@/lib/three-theme'

export type PillarShape = 'octahedron' | 'ring' | 'box'

interface OrbitingPillarProps {
  shape: PillarShape
  /** Orbit radius, in world units, from the core. */
  radius: number
  /** Radians/second — kept slow and cinematic, never fast/spinny. */
  speed: number
  /** Starting angle around the orbit, radians. */
  phase: number
  /** Tilt of the orbital plane, radians. Gives each pillar a distinct path. */
  tilt: number
  /** Visual size of the shape itself. */
  size?: number
  opacity?: number
  entranceDelay?: number
}

/**
 * Orbits by rotating a parent group on Y while the mesh sits offset along
 * local X — the standard cheap "orbit" trick, one rotation update per
 * frame rather than manual per-frame trig for position.
 */
export function OrbitingPillar({
  shape,
  radius,
  speed,
  phase,
  tilt,
  size = 0.32,
  opacity = 0.45,
  entranceDelay = 0,
}: OrbitingPillarProps) {
  const orbitRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    if (orbitRef.current) orbitRef.current.rotation.y = phase
    if (!meshRef.current) return
    gsap.fromTo(
      meshRef.current.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      { x: 1, y: 1, z: 1, duration: 1, ease: 'power3.out', delay: 0.4 + entranceDelay }
    )
  }, [phase, entranceDelay])

  useFrame((_, delta) => {
    if (orbitRef.current) orbitRef.current.rotation.y += delta * speed
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={orbitRef}>
        <mesh ref={meshRef} position={[radius, 0, 0]}>
          {shape === 'octahedron' && <octahedronGeometry args={[size, 0]} />}
          {shape === 'ring' && <torusGeometry args={[size, size * 0.12, 8, 32]} />}
          {shape === 'box' && <boxGeometry args={[size, size, size]} />}
          <meshBasicMaterial color={THREE_COLORS.accent} wireframe transparent opacity={opacity} />
        </mesh>
      </group>
    </group>
  )
}
