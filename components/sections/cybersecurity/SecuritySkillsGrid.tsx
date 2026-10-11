import { Route, Router, Waypoints, Binary, GitFork, ShieldCheck, ShieldAlert, Bug, Lock, Globe, KeyRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { IconCardGrid } from '@/components/ui/IconCardGrid'
import { securityNodes } from '@/data/cybersecurity.data'
import type { SecurityNode } from '@/types/content'

const ICONS: Record<SecurityNode['icon'], LucideIcon> = {
  route: Route,
  router: Router,
  waypoints: Waypoints,
  binary: Binary,
  'git-fork': GitFork,
  'shield-check': ShieldCheck,
  'shield-alert': ShieldAlert,
  bug: Bug,
  lock: Lock,
  globe: Globe,
  'key-round': KeyRound,
}

export function SecuritySkillsGrid() {
  return (
    <IconCardGrid
      items={securityNodes.map((node) => {
        const Icon = ICONS[node.icon]
        return {
          title: node.label,
          description: node.description,
          icon: <Icon className="h-4 w-4 text-accent" />,
          badge: (
            <span
              className={
                node.status === 'skill'
                  ? 'rounded-full border border-accent-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent'
                  : 'rounded-full border border-dashed border-border-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-text-muted'
              }
            >
              {node.status === 'skill' ? 'Skill' : 'Learning'}
            </span>
          ),
        }
      })}
    />
  )
}
