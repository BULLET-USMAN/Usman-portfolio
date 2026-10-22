'use client'

import { useId, useState } from 'react'
import { THREE_COLORS } from '@/lib/three-theme'
import { securityNodes, securityConnections } from '@/data/cybersecurity.data'

const SVG_WIDTH = 760
const SVG_HEIGHT = 620
const CENTER_X = SVG_WIDTH / 2
const CENTER_Y = SVG_HEIGHT / 2
const HUB_RADIUS = 175

// Spatial order around the circle — two clusters (networking skills,
// then security-concept learning areas) so related nodes land next to
// each other for a cleaner diagram.
const LAYOUT_ORDER = [
  'tcp-ip',
  'subnetting',
  'network-topologies',
  'routing-switching',
  'cisco-networking',
  'firewalls',
  'network-security',
  'vpns',
  'encryption-basics',
  'ethical-hacking',
  'vulnerability-assessment',
]

const positions = new Map<string, { x: number; y: number }>()
LAYOUT_ORDER.forEach((id, i) => {
  const angle = (-90 + i * (360 / LAYOUT_ORDER.length)) * (Math.PI / 180)
  positions.set(id, {
    x: CENTER_X + HUB_RADIUS * Math.cos(angle),
    y: CENTER_Y + HUB_RADIUS * Math.sin(angle),
  })
})

function labelAnchor(x: number): 'start' | 'middle' | 'end' {
  if (x < CENTER_X - 20) return 'end'
  if (x > CENTER_X + 20) return 'start'
  return 'middle'
}

/**
 * A hub-and-spoke topology with a handful of cross-links so it reads as
 * a real network diagram rather than a plain star. Every node responds
 * to hover, focus, and click/tap alike, so the interaction works the
 * same on mouse, keyboard, and touch. Solid nodes are skills currently
 * held; dashed nodes are concepts actively being learned — the same
 * dashed = "in progress" language used elsewhere on the site. The full
 * skill/description list also renders as a plain grid elsewhere on the
 * page — this diagram is an enhancement on top of that, not the only
 * way to reach the content.
 */
export function NetworkTopology() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const titleId = useId()
  const activeNode = securityNodes.find((n) => n.id === activeId) ?? null

  function isConnectedToActive(a: string, b: string) {
    if (!activeId) return false
    return a === activeId || b === activeId
  }

  return (
    <div>
      <div className="aspect-[760/620] w-full">
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="h-full w-full overflow-visible"
          role="img"
          aria-labelledby={titleId}
        >
        <title id={titleId}>
          Interactive network diagram of cybersecurity skills and learning areas
        </title>

        {/* Hub */}
        <circle cx={CENTER_X} cy={CENTER_Y} r={32} fill={THREE_COLORS.accent} opacity={0.06} />
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={7}
          fill="none"
          stroke={THREE_COLORS.accent}
          strokeWidth={1.5}
          strokeOpacity={0.6}
          vectorEffect="non-scaling-stroke"
        />

        {/* Hub spokes */}
        {LAYOUT_ORDER.map((id) => {
          const pos = positions.get(id)!
          const highlighted = activeId === id
          return (
            <line
              key={`spoke-${id}`}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={pos.x}
              y2={pos.y}
              stroke={highlighted ? THREE_COLORS.accent : THREE_COLORS.line}
              strokeOpacity={highlighted ? 0.8 : 0.5}
              strokeWidth={highlighted ? 1.5 : 1}
              vectorEffect="non-scaling-stroke"
            />
          )
        })}

        {/* Cross-connections */}
        {securityConnections.map(([a, b]) => {
          const posA = positions.get(a)
          const posB = positions.get(b)
          if (!posA || !posB) return null
          const highlighted = isConnectedToActive(a, b)
          return (
            <line
              key={`link-${a}-${b}`}
              x1={posA.x}
              y1={posA.y}
              x2={posB.x}
              y2={posB.y}
              stroke={highlighted ? THREE_COLORS.accent : THREE_COLORS.line}
              strokeOpacity={highlighted ? 0.7 : 0.3}
              strokeWidth={highlighted ? 1.25 : 0.75}
              strokeDasharray="3 3"
              vectorEffect="non-scaling-stroke"
            />
          )
        })}

        {/* Nodes */}
        {securityNodes.map((node) => {
          const pos = positions.get(node.id)
          if (!pos) return null
          const active = activeId === node.id
          const anchor = labelAnchor(pos.x)
          const labelOffset = anchor === 'end' ? -14 : anchor === 'start' ? 14 : 0
          const labelY =
            pos.y < CENTER_Y - 60
              ? pos.y - 14
              : pos.y > CENTER_Y + 60
                ? pos.y + 24
                : pos.y + 4

          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={`${node.label} (${node.status === 'skill' ? 'skill' : 'currently learning'}): ${node.description}`}
              aria-pressed={active}
              className="cursor-pointer outline-none"
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setActiveId((current) => (current === node.id ? null : node.id))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveId((current) => (current === node.id ? null : node.id))
                }
              }}
            >
              {/* Larger invisible hit-area — the visible dot stays small/subtle,
                  but this keeps the tap/click target workable on mobile, where
                  the whole diagram is scaled down significantly. */}
              <circle cx={pos.x} cy={pos.y} r={26} fill="transparent" pointerEvents="all" />

              {active && (
                <circle cx={pos.x} cy={pos.y} r={16} fill={THREE_COLORS.accent} opacity={0.12} />
              )}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={active ? 7 : 5}
                fill={active ? THREE_COLORS.accent : THREE_COLORS.bg}
                stroke={active ? THREE_COLORS.accent : THREE_COLORS.line}
                strokeWidth={1.5}
                strokeDasharray={node.status === 'learning' ? '2.5 2' : undefined}
                vectorEffect="non-scaling-stroke"
                className="transition-all duration-200"
              />
              <text
                x={pos.x + labelOffset}
                y={labelY}
                textAnchor={anchor}
                fontSize="11"
                className="pointer-events-none select-none font-mono uppercase tracking-wide"
                fill={active ? THREE_COLORS.accent : 'var(--color-text-muted)'}
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
      </div>

      <div className="mt-3 flex items-center justify-center gap-5 font-mono text-[11px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <svg width="10" height="10" aria-hidden="true">
            <circle cx="5" cy="5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Skill
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="10" height="10" aria-hidden="true">
            <circle
              cx="5"
              cy="5"
              r="3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="1.6 1.4"
            />
          </svg>
          Currently learning
        </span>
      </div>

      <div
        aria-live="polite"
        className="mt-2 min-h-[3.5rem] rounded-[var(--radius-sm)] border border-border bg-surface-glass px-4 py-3 text-sm"
      >
        {activeNode ? (
          <>
            <span className="font-mono text-xs uppercase tracking-wide text-accent">
              {activeNode.label}
            </span>
            <span className="ml-2 font-mono text-[10px] uppercase tracking-wide text-text-muted">
              {activeNode.status === 'skill' ? 'Skill' : 'Currently learning'}
            </span>
            <p className="mt-1 text-text-secondary">{activeNode.description}</p>
          </>
        ) : (
          <p className="text-text-muted">Hover, focus, or tap a node to learn more.</p>
        )}
      </div>
    </div>
  )
}
