'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { THREE_COLORS } from '@/lib/three-theme'

// Bracket geometry, hand-placed rather than computed — a fixed 4→2→1
// structure is exactly what a bracket is, no need for it to be dynamic.
const ROUND_1_Y = [40, 120, 200, 280]
const ROUND_1_X = 32
const ROUND_2_X = 168
const ROUND_2_Y = [80, 240]
const ELBOW_1_X = 100
const FINAL_X = 300
const FINAL_Y = 160
const ELBOW_2_X = 234

function elbowPath(x1: number, y1: number, elbowX: number, y2: number, x2: number) {
  return `M${x1},${y1} L${elbowX},${y1} L${elbowX},${y2} L${x2},${y2}`
}

const ROUND_1_PATHS = [
  elbowPath(ROUND_1_X, ROUND_1_Y[0], ELBOW_1_X, ROUND_2_Y[0], ROUND_2_X),
  elbowPath(ROUND_1_X, ROUND_1_Y[1], ELBOW_1_X, ROUND_2_Y[0], ROUND_2_X),
  elbowPath(ROUND_1_X, ROUND_1_Y[2], ELBOW_1_X, ROUND_2_Y[1], ROUND_2_X),
  elbowPath(ROUND_1_X, ROUND_1_Y[3], ELBOW_1_X, ROUND_2_Y[1], ROUND_2_X),
]

const FINAL_PATHS = [
  elbowPath(ROUND_2_X, ROUND_2_Y[0], ELBOW_2_X, FINAL_Y, FINAL_X),
  elbowPath(ROUND_2_X, ROUND_2_Y[1], ELBOW_2_X, FINAL_Y, FINAL_X),
]

/**
 * An abstract bracket — structure only, no team names or results, so it
 * never implies a real tournament outcome. Reveals in sequence on scroll:
 * round-1 nodes, then the lines connecting them, then round-2 nodes,
 * then the final connector, then the final node (echoing the hero
 * core's glow treatment for continuity).
 */
export function TournamentBracket() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const round1Nodes = svg.querySelectorAll<SVGCircleElement>('[data-node="r1"]')
    const round2Nodes = svg.querySelectorAll<SVGCircleElement>('[data-node="r2"]')
    const finalNode = svg.querySelectorAll<SVGCircleElement>('[data-node="final"]')
    const round1Paths = svg.querySelectorAll<SVGPathElement>('[data-path="r1"]')
    const finalPaths = svg.querySelectorAll<SVGPathElement>('[data-path="final"]')

    const allPaths = [...round1Paths, ...finalPaths]
    const pathLengths = allPaths.map((path) => path.getTotalLength())
    allPaths.forEach((path, i) => {
      path.style.strokeDasharray = `${pathLengths[i]}`
    })

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      gsap.set([...round1Nodes, ...round2Nodes, ...finalNode], { opacity: 1, scale: 1 })
      gsap.set(allPaths, { strokeDashoffset: 0 })
      return
    }

    gsap.set([...round1Nodes, ...round2Nodes, ...finalNode], {
      opacity: 0,
      scale: 0.5,
      transformOrigin: 'center',
    })
    allPaths.forEach((path, i) => {
      gsap.set(path, { strokeDashoffset: pathLengths[i] })
    })

    const trigger = ScrollTrigger.create({
      trigger: svg,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        const tl = gsap.timeline()
        tl.to(round1Nodes, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' })
          .to(round1Paths, { strokeDashoffset: 0, duration: 0.5, stagger: 0.1, ease: 'power2.inOut' }, '-=0.1')
          .to(round2Nodes, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' })
          .to(finalPaths, { strokeDashoffset: 0, duration: 0.5, stagger: 0.12, ease: 'power2.inOut' }, '-=0.1')
          .to(finalNode, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.8)' })
      },
    })

    return () => trigger.kill()
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 340 320"
      className="h-full w-full"
      role="img"
      aria-label="Abstract tournament bracket diagram"
    >
      {/* Round labels */}
      <text
        x={ROUND_1_X}
        y={20}
        className="fill-text-muted font-mono text-[16px] uppercase tracking-wider sm:text-[9px]"
      >
        Round 1
      </text>
      <text
        x={ROUND_2_X}
        y={20}
        className="fill-text-muted font-mono text-[16px] uppercase tracking-wider sm:text-[9px]"
      >
        Round 2
      </text>
      <text
        x={FINAL_X - 14}
        y={20}
        className="fill-text-muted font-mono text-[16px] uppercase tracking-wider sm:text-[9px]"
      >
        Final
      </text>

      {ROUND_1_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          data-path="r1"
          fill="none"
          stroke={THREE_COLORS.line}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {FINAL_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          data-path="final"
          fill="none"
          stroke={THREE_COLORS.accent}
          strokeWidth={1}
          strokeOpacity={0.5}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {ROUND_1_Y.map((y, i) => (
        <circle
          key={i}
          data-node="r1"
          cx={ROUND_1_X}
          cy={y}
          r={5}
          fill={THREE_COLORS.bg}
          stroke={THREE_COLORS.line}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {ROUND_2_Y.map((y, i) => (
        <circle
          key={i}
          data-node="r2"
          cx={ROUND_2_X}
          cy={y}
          r={5}
          fill={THREE_COLORS.bg}
          stroke={THREE_COLORS.accent}
          strokeWidth={1.5}
          strokeOpacity={0.7}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      <circle
        data-node="final"
        cx={FINAL_X}
        cy={FINAL_Y}
        r={14}
        fill="none"
        stroke={THREE_COLORS.accent}
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
      />
      <circle data-node="final" cx={FINAL_X} cy={FINAL_Y} r={5} fill={THREE_COLORS.accent} />
      <circle data-node="final" cx={FINAL_X} cy={FINAL_Y} r={22} fill={THREE_COLORS.accent} opacity={0.08} />
    </svg>
  )
}
