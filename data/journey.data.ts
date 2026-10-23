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
 * The journey timeline. The three education stages use real calendar
 * years as provided. The remaining stages (Amazon/E-Commerce, Esports,
 * Matrix, Cybersecurity) have no confirmed specific dates, so they're
 * anchored relatively — "Alongside BSCS" — rather than given invented
 * exact dates; their position in the list (after BSCS begins) already
 * conveys the rough sequence. Categories are chosen so nothing reads as
 * formal employment it isn't: Amazon/E-Commerce is explicitly
 * "Freelance", Esports a "Personal Project" preceding Matrix's
 * founding, Cybersecurity "Ongoing Learning".
 */
export const journeyStages: JourneyStage[] = [
  {
    id: 'bscs',
    period: '2023 \u2013 2027',
    title: 'BSCS \u2014 Computer Science',
    description:
      'Pursuing a BSCS at the University of Faisalabad \u2014 now in the 7th semester, having built multiple projects along the way and currently working on a final year project.',
    category: 'education',
    skills: ['Programming fundamentals', 'Problem solving', 'Systems thinking'],
    relatedHref: '/about',
  },
  {
    id: 'amazon-ecommerce',
    period: 'Alongside BSCS',
    title: 'Amazon & E-Commerce',
    description:
      'Independent, freelance work as an Amazon virtual assistant \u2014 product research, market analysis, and hands-on use of research tools.',
    category: 'freelance',
    skills: ['Product research', 'Market research', 'Excel', 'Helium 10'],
    relatedHref: '/ecommerce',
  },
  {
    id: 'matrix-esports',
    period: 'Alongside BSCS',
    title: 'Matrix Esports',
    description:
      'Founded and built an esports organization from the ground up \u2014 tournaments, community, and sponsorship outreach.',
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
