import { FileSpreadsheet, Gauge, Radar } from 'lucide-react'
import { IconCardGrid } from '@/components/ui/IconCardGrid'
import { ecommerceTools } from '@/data/ecommerce.data'
import type { EcommerceTool } from '@/types/content'

const ICONS: Record<EcommerceTool['icon'], React.ComponentType<{ className?: string }>> = {
  spreadsheet: FileSpreadsheet,
  gauge: Gauge,
  radar: Radar,
}

export function ToolkitGrid() {
  return (
    <IconCardGrid
      columns={3}
      items={ecommerceTools.map((tool) => {
        const Icon = ICONS[tool.icon]
        return {
          title: tool.name,
          description: tool.description,
          icon: <Icon className="h-4 w-4 text-accent" />,
        }
      })}
    />
  )
}
