'use client'

import { useSyncExternalStore } from 'react'

export type DeviceTier = 'high' | 'medium' | 'low'

const VIEWPORT_QUERY = '(max-width: 768px)'
const POINTER_QUERY = '(pointer: coarse)'

/**
 * Rough, cheap heuristic for how much 3D/animation complexity a device
 * can comfortably handle. This intentionally never tries to fingerprint
 * the GPU — it combines a few widely-supported signals:
 *
 *  - low:    coarse-pointer/narrow viewport with few cores, very few
 *            logical cores overall, or no WebGL support at all.
 *  - medium: everything else that isn't clearly a high-end desktop.
 *  - high:   wide viewport + fine pointer + enough logical cores.
 */
function computeTier(): DeviceTier {
  const coarsePointer = window.matchMedia(POINTER_QUERY).matches
  const narrowViewport = window.matchMedia(VIEWPORT_QUERY).matches
  const cores = navigator.hardwareConcurrency ?? 4

  let hasWebGL = true
  try {
    const canvas = document.createElement('canvas')
    hasWebGL = !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    hasWebGL = false
  }

  if (!hasWebGL || cores <= 2) return 'low'
  if (coarsePointer || narrowViewport) return cores <= 4 ? 'low' : 'medium'
  if (cores >= 8) return 'high'
  return 'medium'
}

function subscribe(callback: () => void) {
  const viewportQuery = window.matchMedia(VIEWPORT_QUERY)
  const pointerQuery = window.matchMedia(POINTER_QUERY)
  viewportQuery.addEventListener('change', callback)
  pointerQuery.addEventListener('change', callback)
  return () => {
    viewportQuery.removeEventListener('change', callback)
    pointerQuery.removeEventListener('change', callback)
  }
}

// Defaults to 'low' on the server, so first paint never assumes more
// power than a client check has actually confirmed.
function getServerSnapshot(): DeviceTier {
  return 'low'
}

/** SSR-safe hook exposing the current device performance tier. */
export function useDeviceTier(): DeviceTier {
  return useSyncExternalStore(subscribe, computeTier, getServerSnapshot)
}
