import type { JourneyStage } from '@/types/content'

/** Display metadata per category — label and honest framing shown on each timeline card. */
export const JOURNEY_CATEGORY_LABELS: Record<JourneyStage['category'], string> = {
  education: 'Education',
  'personal-project': 'Personal Project',
  venture: 'Founder',
  freelance: 'Freelance',
  experience: 'Professional Experience',
  learning: 'Ongoing Learning',
  future: 'Looking Ahead',
}

/**
 * The journey timeline. The education stages use real calendar
 * years as provided. The remaining stages (Esports, Matrix, Cybersecurity)
 * are anchored relatively — "Alongside BSCS" — rather than given invented
 * exact dates; their position in the list (after BSCS begins) already
 * conveys the rough sequence. Categories are chosen so nothing reads as
 * formal employment it isn't: Esports a "Personal Project" preceding Matrix's
 * founding, Cybersecurity "Ongoing Learning".
 */
export const journeyStages: JourneyStage[] = [
  {
    id: 'bscs',
    period: '2023 \u2013 2027',
    title: 'BSCS in Computer Science',
    description:
      'Pursuing a BSCS at the University of Faisalabad (currently in my 7th semester), developing solid foundations in algorithms, systems, and active final year project engineering.',
    category: 'education',
    skills: ['Programming fundamentals', 'Problem solving', 'Systems thinking'],
    relatedHref: '/about',
  },
  {
    id: 'matrix-esports',
    period: 'Alongside BSCS',
    title: 'Matrix Esports',
    description:
      'Founded and scaled an esports organization from the ground up, directing competitive tournaments, community operations, and brand partnerships.',
    category: 'venture',
    skills: ['Leadership', 'Sponsorship outreach', 'Tournament organization'],
    relatedHref: '/matrix',
  },
  {
    id: 'cybersecurity',
    period: 'Alongside BSCS',
    title: 'Cybersecurity',
    description:
      'Continuously developing practical skills in networking, Linux, and security fundamentals through hands-on, self-directed learning.',
    category: 'learning',
    skills: ['Networking', 'Linux', 'Security fundamentals'],
    relatedHref: '/cybersecurity',
  },
]
