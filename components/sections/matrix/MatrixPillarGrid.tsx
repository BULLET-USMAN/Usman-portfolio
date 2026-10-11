import { Swords, Trophy, Users, Handshake, CalendarDays, Share2 } from 'lucide-react'
import { IconCardGrid } from '@/components/ui/IconCardGrid'
import { matrixPillars } from '@/data/matrix.data'
import type { MatrixPillar } from '@/types/content'

const ICONS: Record<MatrixPillar['icon'], React.ComponentType<{ className?: string }>> = {
  swords: Swords,
  trophy: Trophy,
  users: Users,
  handshake: Handshake,
  'calendar-days': CalendarDays,
  share2: Share2,
}

export function MatrixPillarGrid() {
  return (
    <IconCardGrid
      items={matrixPillars.map((pillar) => {
        const Icon = ICONS[pillar.icon]
        return {
          title: pillar.title,
          description: pillar.description,
          icon: <Icon className="h-4 w-4 text-accent" />,
        }
      })}
    />
  )
}
