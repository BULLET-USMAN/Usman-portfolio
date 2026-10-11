import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/sections/journey/Timeline'

export function Journey() {
  return (
    <SectionShell id="journey">
      <SectionHeading
        mark
        eyebrow="Journey"
        title="How the path connects"
        description="Computer science, e-commerce, esports, Matrix Esports, and cybersecurity — each stage labeled honestly as education, personal project, founding, experience, or ongoing learning, not dressed up as something it isn't."
      />

      <div className="mt-14">
        <Timeline />
      </div>
    </SectionShell>
  )
}
