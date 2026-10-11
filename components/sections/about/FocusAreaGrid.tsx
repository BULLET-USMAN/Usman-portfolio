import {
  GraduationCap,
  Rocket,
  Gamepad2,
  Cpu,
  Shield,
  ShoppingCart,
  Users,
  Calendar,
  TrendingUp,
} from 'lucide-react'
import { IconCardGrid } from '@/components/ui/IconCardGrid'
import { focusAreas } from '@/data/about.data'
import type { FocusArea } from '@/types/content'

const ICONS: Record<FocusArea['icon'], React.ComponentType<{ className?: string }>> = {
  'graduation-cap': GraduationCap,
  rocket: Rocket,
  gamepad: Gamepad2,
  cpu: Cpu,
  shield: Shield,
  'shopping-cart': ShoppingCart,
  users: Users,
  calendar: Calendar,
  'trending-up': TrendingUp,
}

export function FocusAreaGrid() {
  return (
    <IconCardGrid
      items={focusAreas.map((area) => {
        const Icon = ICONS[area.icon]
        return {
          title: area.title,
          description: area.description,
          icon: <Icon className="h-4 w-4 text-accent" />,
        }
      })}
    />
  )
}
