import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillClusters } from '@/components/sections/skills/SkillClusters'

export function Skills() {
  return (
    <SectionShell id="skills" elevated>
      <SectionHeading
        mark
        eyebrow="Skills"
        title="Technology, cybersecurity, and esports"
        description="A practical breakdown of technologies, protocols, and toolkits I actively use across software development, network security, and organization management."
      />

      <div className="mt-12">
        <SkillClusters />
      </div>
    </SectionShell>
  )
}
