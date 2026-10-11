'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { PerspectiveCamera as ThreePerspectiveCamera } from 'three'
import { useHeroScrollStore } from '@/lib/hero-scroll-store'

// How far the camera is allowed to drift toward the cursor, in world units.
const PARALLAX_RANGE_X = 0.45
const PARALLAX_RANGE_Y = 0.28
// How quickly the camera eases toward its target each frame (higher = snappier).
const EASE = 3.2

const BASE_Z = 6.4
const SCROLL_PULLBACK_Z = 1.3 // extra distance added as the hero scrolls out

interface CameraRigProps {
  enableParallax: boolean
}

/**
 * Reads the window-level pointer position (so parallax responds anywhere
 * in the hero, not just while hovering the canvas) and the GSAP-driven
 * scroll progress store, and eases the camera toward both each frame.
 * Nothing here triggers a React re-render — the pointer arrives via a
 * mutable ref and scroll progress via a non-reactive store read.
 */
export function CameraRig({ enableParallax }: CameraRigProps) {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!enableParallax) return

    function handlePointerMove(event: PointerEvent) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [enableParallax])

  useFrame((state, delta) => {
    const camera = state.camera as ThreePerspectiveCamera
    const progress = useHeroScrollStore.getState().progress

    const targetX = enableParallax ? pointer.current.x * PARALLAX_RANGE_X : 0
    const targetY = enableParallax ? -pointer.current.y * PARALLAX_RANGE_Y : 0
    const targetZ = BASE_Z + progress * SCROLL_PULLBACK_Z

    const ease = 1 - Math.exp(-EASE * delta)
    camera.position.x += (targetX - camera.position.x) * ease
    camera.position.y += (targetY - camera.position.y) * ease
    camera.position.z += (targetZ - camera.position.z) * ease
    camera.lookAt(0, 0, 0)
  })

  return null
}
