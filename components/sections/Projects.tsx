import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectGrid } from '@/components/sections/projects/ProjectGrid'

export function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        mark
        eyebrow="Projects"
        title="Engineered projects and platforms"
        description="A curated selection of software platforms and tools I have engineered across defensive cybersecurity, web applications, and esports operations, complete with architecture details and live code."
      />

      <div className="mt-12">
        <ProjectGrid />
      </div>
    </SectionShell>
  )
}
