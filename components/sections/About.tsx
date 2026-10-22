import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SubsectionLabel } from '@/components/ui/SubsectionLabel'
import { StatsGrid } from '@/components/ui/StatsGrid'
import { FocusAreaGrid } from '@/components/sections/about/FocusAreaGrid'
import { stats } from '@/data/about.data'

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        mark
        eyebrow="About"
        title="Building at the intersection of three worlds"
        description="Originally from Faisalabad, Muhammad Usman Junaid is a Computer Science student at the University of Faisalabad — pairing that academic foundation with hands-on entrepreneurship: founding and running an esports organization, learning cybersecurity from the ground up, and working across Amazon and e-commerce. The common thread is community, technology, and a habit of treating every domain as something to keep improving."
      />

      <div className="mt-12">
        <StatsGrid stats={stats} columns={4} />
      </div>

      <div className="mt-16">
        <SubsectionLabel>Where the focus goes</SubsectionLabel>
        <div className="mt-6">
          <FocusAreaGrid />
        </div>
      </div>
    </SectionShell>
  )
}
