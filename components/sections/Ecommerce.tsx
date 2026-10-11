import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SubsectionLabel } from '@/components/ui/SubsectionLabel'
import { StatsGrid } from '@/components/ui/StatsGrid'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { ResearchPipeline } from '@/components/sections/ecommerce/ResearchPipeline'
import { ToolkitGrid } from '@/components/sections/ecommerce/ToolkitGrid'
import { ecommerceStats } from '@/data/ecommerce.data'

const RESEARCH_SKILLS = [
  'Product Research',
  'Market Research',
  'Competitor Analysis',
  'Keyword Research',
  'Listing Research',
]

export function Ecommerce() {
  return (
    <SectionShell id="ecommerce" elevated>
      <SectionHeading
        mark
        eyebrow="Amazon & E-Commerce"
        title="Research, operations, and product discovery"
        description="Hands-on experience in product hunting, product listing, and Amazon operations more broadly — applying research skills along the way, from finding a product to publishing a finished listing."
      />

      <div className="mt-6">
        <Badge>Amazon VA</Badge>
      </div>

      <div className="mt-5">
        <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
          Research skills applied
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {RESEARCH_SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <StatsGrid stats={ecommerceStats} />
      </div>

      <div className="mt-14">
        <GlassCard className="p-6 sm:p-8">
          <ResearchPipeline />
        </GlassCard>
      </div>

      <div className="mt-16">
        <SubsectionLabel>Toolkit</SubsectionLabel>
        <div className="mt-6">
          <ToolkitGrid />
        </div>
      </div>
    </SectionShell>
  )
}
