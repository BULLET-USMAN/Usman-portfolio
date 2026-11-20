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
        description="I am a Computer Science student at the University of Faisalabad, pairing an academic foundation with hands-on entrepreneurship: founding and directing Matrix Esports, building defensive security platforms, and engineering modern web applications. The common thread across my work is community, technical discipline, and continuous improvement."
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
