import { create } from 'zustand'

interface HeroScrollState {
  /** 0 → 1 as the hero section scrolls from fully in view to fully past. */
  progress: number
  setProgress: (progress: number) => void
}

/**
 * GSAP's ScrollTrigger writes to this store on scroll (see Hero.tsx).
 * The R3F camera rig reads it imperatively inside useFrame via
 * `.getState()` rather than the reactive hook, so scrolling never
 * triggers a React re-render — only the Three.js render loop updates.
 */
export const useHeroScrollStore = create<HeroScrollState>((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress }),
}))
