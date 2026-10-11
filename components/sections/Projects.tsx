import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectGrid } from '@/components/sections/projects/ProjectGrid'

export function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        mark
        eyebrow="Projects"
        title="A showcase across every discipline"
        description="Matrix Esports, cybersecurity, web development, AI/university work, and e-commerce — each project shown with role, technologies, and outcome, and nothing here that wasn't actually built."
      />

      <div className="mt-12">
        <ProjectGrid />
      </div>
    </SectionShell>
  )
}
