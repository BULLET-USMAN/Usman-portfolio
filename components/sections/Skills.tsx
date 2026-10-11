import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillClusters } from '@/components/sections/skills/SkillClusters'

export function Skills() {
  return (
    <SectionShell id="skills" elevated>
      <SectionHeading
        mark
        eyebrow="Skills"
        title="Technology, cybersecurity, esports, and e-commerce"
        description="Grouped by domain rather than ranked by number — there's no meaningful percentage to put on a skill like this, so these are shown as what they are: things worked with, not scored."
      />

      <div className="mt-12">
        <SkillClusters />
      </div>
    </SectionShell>
  )
}
