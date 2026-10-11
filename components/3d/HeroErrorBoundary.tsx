'use client'

import { Component, type ReactNode } from 'react'
import { StaticGlow } from '@/components/3d/fallback/StaticGlow'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Device-tier gating in HeroVisual handles the common case (skip WebGL
 * on devices that likely can't handle it), but it can't catch a scene
 * that starts rendering and then throws — a lost WebGL context, a
 * driver quirk, etc. This is the fallback for that: if the 3D scene
 * throws at runtime, show the same static visual low-tier devices get,
 * rather than crashing the page.
 */
export class HeroErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.error('Hero 3D scene failed at runtime, falling back to static visual:', error)
  }

  render() {
    if (this.state.hasError) return <StaticGlow />
    return this.props.children
  }
}
