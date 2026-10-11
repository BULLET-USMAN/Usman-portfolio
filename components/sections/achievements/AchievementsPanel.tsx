import { Award } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { EmptyStatePanel } from '@/components/ui/EmptyStatePanel'
import { achievements, ACHIEVEMENT_CATEGORIES } from '@/data/achievements.data'

export function AchievementsPanel() {
  if (achievements.length === 0) {
    return (
      <EmptyStatePanel icon={<Award className="h-4 w-4" />}>
        Real achievements — tournament results, milestones, certifications, partnerships — will
        appear here once confirmed and added to{' '}
        <code className="font-mono text-text-secondary">data/achievements.data.ts</code>. Nothing
        is invented in the meantime.
      </EmptyStatePanel>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((achievement) => (
        <GlassCard key={achievement.title} interactive className="p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            {ACHIEVEMENT_CATEGORIES[achievement.category]}
          </p>
          <h3 className="mt-2 font-display text-base font-medium text-text-primary">
            {achievement.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
            {achievement.description}
          </p>
          {achievement.date && (
            <p className="mt-3 font-mono text-[11px] text-text-muted">{achievement.date}</p>
          )}
        </GlassCard>
      ))}
    </div>
  )
}
