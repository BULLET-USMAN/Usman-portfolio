import type { Achievement } from '@/types/content'

/** Display metadata per category — used once real achievements exist to group them. */
export const ACHIEVEMENT_CATEGORIES: Record<Achievement['category'], string> = {
  esports: 'Esports Milestone',
  tournament: 'Tournament Achievement',
  matrix: 'Matrix Esports Milestone',
  certification: 'Certification',
  project: 'Project',
  partnership: 'Partnership',
  community: 'Community Growth',
  award: 'Award',
}

/**
 * Real achievements only. Stays empty until one is confirmed — see the
 * empty-state handling in Achievements.tsx. Never populate with
 * example/sample entries; an achievement card reads as a factual claim.
 */
export const achievements: Achievement[] = []
