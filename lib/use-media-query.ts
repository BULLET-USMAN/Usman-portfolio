'use client'

import { useSyncExternalStore } from 'react'

/** SSR-safe media query check. Defaults to `false` until resolved on the client. */
export function useMediaQuery(query: string): boolean {
  function subscribe(callback: () => void) {
    const mql = window.matchMedia(query)
    mql.addEventListener('change', callback)
    return () => mql.removeEventListener('change', callback)
  }

  function getSnapshot() {
    return window.matchMedia(query).matches
  }

  function getServerSnapshot() {
    return false
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
