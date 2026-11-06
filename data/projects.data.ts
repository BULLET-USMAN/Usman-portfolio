import type { Project } from '@/types/content'

/** Display metadata for each project category — label shown in filter tabs and card badges. */
export const PROJECT_CATEGORIES: Record<Project['category'], string> = {
  'matrix-esports': 'Matrix Esports',
  cybersecurity: 'Cybersecurity',
  'web-development': 'Web Development',
  'ai-university': 'AI / University',
  ecommerce: 'Amazon / E-Commerce',
}

/**
 * The project showcase. Stays empty until there's a real project to
 * list — the grid, filtering, and cards below are fully built and will
 * activate automatically the moment an entry is added here. Never
 * populate with example/sample projects, invented outcomes, or
 * technologies not actually used.
 */
export const projects: Project[] = [
  {
    id: 'aegissiem',
    title: 'AegisSIEM',
    category: 'cybersecurity',
    description:
      'An enterprise-grade, modular, web-based Security Information and Event Management (SIEM) platform for modern SOCs. Ingests Windows & Linux telemetry, applies declarative Sigma detection rules mapped to MITRE ATT&CK, correlates multi-stage attacks, and provides explainable 0–100 risk scoring with analyst incident workflows.',
    role: 'Creator & Developer',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Sigma Rules'],
    outcome: 'Centralized telemetry ingestion, MITRE ATT&CK detection mapping, multi-stage event correlation, and full SOC incident investigation workflows.',
    githubUrl: 'https://github.com/BULLET-USMAN/AegisSIEM',
  },
  {
    id: 'sentineldlp',
    title: 'SentinelDLP',
    category: 'cybersecurity',
    description:
      'An enterprise-grade, AI-powered Data Loss Prevention (DLP) and exfiltration detection platform. Monitors endpoint activity, classifies sensitive data, computes explainable 0–100 threat risk scores, and orchestrates investigations with a local AI SOC Analyst.',
    role: 'Creator & Developer',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'Ollama / LLMs', 'Tailwind CSS'],
    outcome: '171 automated tests passing, zero-leakage privacy redaction, and local AI-assisted SOC threat investigation.',
    githubUrl: 'https://github.com/BULLET-USMAN/SentinelDLP',
  },
  {
    id: 'cinelist',
    title: 'CineList',
    category: 'web-development',
    description:
      'A modern cinema discovery and personal watchlist platform. Explore trending films, browse by genre, watch official trailers, and curate a personalized watchlist with secure authentication.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'TMDB API', 'Vercel'],
    outcome: 'Live web app with real-time watchlist tracking, user authentication, and TMDB API integration.',
    externalUrl: 'https://cinelist-watch.vercel.app/',
  },
]
