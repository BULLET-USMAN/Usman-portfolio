import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SubsectionLabel } from '@/components/ui/SubsectionLabel'
import { GlassCard } from '@/components/ui/GlassCard'
import { NetworkTopology } from '@/components/sections/cybersecurity/NetworkTopology'
import { SecuritySkillsGrid } from '@/components/sections/cybersecurity/SecuritySkillsGrid'
import { SecondarySkillsGrid } from '@/components/sections/cybersecurity/SecondarySkillsGrid'
import { ProjectsPanel } from '@/components/sections/cybersecurity/ProjectsPanel'
import { operatingSystems, programmingSkills, toolsExposure } from '@/data/cybersecurity.data'

export function Cybersecurity() {
  return (
    <SectionShell id="cybersecurity">
      <SectionHeading
        mark
        eyebrow="Cybersecurity"
        title="Continuously developing practical technical skills"
        description="Networking fundamentals and security concepts — presented honestly as skills, active learning, and early tool exposure, not certifications, professional experience, or authorized penetration-testing work."
      />

      <div className="mt-10">
        <GlassCard className="mx-auto max-w-2xl p-4 sm:p-6 md:p-8">
          <NetworkTopology />
        </GlassCard>
      </div>

      <div className="mt-16">
        <SubsectionLabel>Networking &amp; security concepts</SubsectionLabel>
        <div className="mt-6">
          <SecuritySkillsGrid />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <SubsectionLabel>Operating systems</SubsectionLabel>
          <div className="mt-6">
            <SecondarySkillsGrid skills={operatingSystems} columns={2} />
          </div>
        </div>
        <div>
          <SubsectionLabel>Programming</SubsectionLabel>
          <div className="mt-6">
            <SecondarySkillsGrid skills={programmingSkills} columns={2} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SubsectionLabel>Tools — exposure</SubsectionLabel>
        <p className="mt-2 text-sm text-text-muted">
          Familiarity through use and coursework, not claimed proficiency.
        </p>
        <div className="mt-6">
          <SecondarySkillsGrid skills={toolsExposure} />
        </div>
      </div>

      <div className="mt-16">
        <SubsectionLabel>Projects &amp; labs</SubsectionLabel>
        <div className="mt-6">
          <ProjectsPanel />
        </div>
      </div>
    </SectionShell>
  )
}
