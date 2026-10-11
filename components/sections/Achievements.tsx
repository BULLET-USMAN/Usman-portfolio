import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AchievementsPanel } from '@/components/sections/achievements/AchievementsPanel'

export function Achievements() {
  return (
    <SectionShell id="achievements" elevated>
      <SectionHeading
        mark
        eyebrow="Achievements"
        title="Milestones, as they happen"
        description="Space for tournament results, organization milestones, certifications, partnerships, and community growth — populated only as real achievements are confirmed."
      />

      <div className="mt-10">
        <AchievementsPanel />
      </div>
    </SectionShell>
  )
}
