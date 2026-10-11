import { AppWindow, SquareTerminal, Code2, Boxes, Layers, Waves, Radar, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { IconCardGrid } from '@/components/ui/IconCardGrid'
import type { SecondarySkill } from '@/types/content'

const ICONS: Record<SecondarySkill['icon'], LucideIcon> = {
  'app-window': AppWindow,
  terminal: SquareTerminal,
  code: Code2,
  boxes: Boxes,
  layers: Layers,
  waves: Waves,
  radar: Radar,
  workflow: Workflow,
}

interface SecondarySkillsGridProps {
  skills: SecondarySkill[]
  columns?: 2 | 3
}

export function SecondarySkillsGrid({ skills, columns = 3 }: SecondarySkillsGridProps) {
  return (
    <IconCardGrid
      columns={columns}
      items={skills.map((skill) => {
        const Icon = ICONS[skill.icon]
        return {
          title: skill.label,
          description: skill.description,
          icon: <Icon className="h-4 w-4 text-accent" />,
        }
      })}
    />
  )
}
