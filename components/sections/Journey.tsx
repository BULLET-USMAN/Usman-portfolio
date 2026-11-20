import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/sections/journey/Timeline'

export function Journey() {
  return (
    <SectionShell id="journey" elevated>
      <SectionHeading
        mark
        eyebrow="Journey"
        title="How the path connects"
        description="My trajectory connecting computer science academics, founding and scaling Matrix Esports, and continuous hands-on learning across systems and cybersecurity."
      />

      <div className="mt-14">
        <Timeline />
      </div>
    </SectionShell>
  )
}
