import type { SecondarySkill, SecurityNode, SecurityProject } from '@/types/content'

/**
 * Networking + security-concept nodes shown in the network diagram and
 * the grid beneath it. `status` distinguishes skills currently held
 * (networking fundamentals) from concepts actively being learned
 * (security topics) — reflected visually as solid vs. dashed nodes.
 * Presented as skills and active learning — not certifications, not
 * professional/employment experience, and not claims of authorized
 * penetration-testing work.
 */
export const securityNodes: SecurityNode[] = [
  // Networking — skills currently held
  {
    id: 'tcp-ip',
    label: 'TCP/IP',
    description: 'The protocol suite underlying most networked communication.',
    status: 'skill',
    icon: 'route',
  },
  {
    id: 'cisco-networking',
    label: 'Cisco Networking',
    description: 'Working with Cisco networking concepts and equipment fundamentals.',
    status: 'skill',
    icon: 'router',
  },
  {
    id: 'network-topologies',
    label: 'Network Topologies',
    description: 'Understanding how networks are structured and connected.',
    status: 'skill',
    icon: 'waypoints',
  },
  {
    id: 'subnetting',
    label: 'Subnetting',
    description: 'IP subnetting and addressing fundamentals.',
    status: 'skill',
    icon: 'binary',
  },
  {
    id: 'routing-switching',
    label: 'Routing & Switching',
    description: 'Fundamentals of how traffic is routed and switched across networks.',
    status: 'skill',
    icon: 'git-fork',
  },
  // Security concepts — actively being learned
  {
    id: 'network-security',
    label: 'Network Security',
    description: 'Principles behind securing networks against common threats.',
    status: 'learning',
    icon: 'shield-check',
  },
  {
    id: 'ethical-hacking',
    label: 'Ethical Hacking',
    description: 'Learning the principles and mindset behind authorized security testing.',
    status: 'learning',
    icon: 'shield-alert',
  },
  {
    id: 'vulnerability-assessment',
    label: 'Vulnerability Assessment',
    description: 'Identifying and understanding weaknesses in systems, as a learning practice.',
    status: 'learning',
    icon: 'bug',
  },
  {
    id: 'firewalls',
    label: 'Firewalls',
    description: 'How firewalls filter and control network traffic.',
    status: 'learning',
    icon: 'lock',
  },
  {
    id: 'vpns',
    label: 'VPNs',
    description: 'How VPNs secure and tunnel network traffic.',
    status: 'learning',
    icon: 'globe',
  },
  {
    id: 'encryption-basics',
    label: 'Encryption Basics',
    description: 'Foundational concepts in encryption and data protection.',
    status: 'learning',
    icon: 'key-round',
  },
]

/**
 * Extra cross-links between related nodes in the network diagram, on
 * top of every node's connection to the central hub — makes it read as
 * a topology rather than a plain star, without implying anything about
 * real infrastructure. Pairs reference `securityNodes` ids.
 */
export const securityConnections: [string, string][] = [
  ['tcp-ip', 'subnetting'],
  ['cisco-networking', 'routing-switching'],
  ['network-topologies', 'routing-switching'],
  ['network-security', 'firewalls'],
  ['network-security', 'vpns'],
  ['firewalls', 'vpns'],
  ['vpns', 'encryption-basics'],
  ['ethical-hacking', 'vulnerability-assessment'],
]

/** Operating systems worked with. */
export const operatingSystems: SecondarySkill[] = [
  { label: 'Windows', description: 'General Windows operating system familiarity.', icon: 'app-window' },
  {
    label: 'Linux',
    description: 'Basic Linux administration — command line, file systems, and system management.',
    icon: 'terminal',
  },
]

/** Programming and scripting — early-stage, named honestly as basics. */
export const programmingSkills: SecondarySkill[] = [
  { label: 'Python', description: 'Scripting basics in Python.', icon: 'code' },
  { label: 'OOP Concepts', description: 'Object-oriented programming fundamentals.', icon: 'boxes' },
  { label: 'Web Technologies', description: 'General familiarity with web technologies.', icon: 'layers' },
]

/**
 * Tools — exposure only, not claimed proficiency. Kept visually and
 * textually distinct from the skills above for that reason.
 */
export const toolsExposure: SecondarySkill[] = [
  { label: 'Wireshark', description: 'Exposure to network traffic analysis with Wireshark.', icon: 'waves' },
  { label: 'Nmap', description: 'Exposure to network scanning with Nmap.', icon: 'radar' },
  {
    label: 'Cisco Packet Tracer',
    description: 'Exposure to network simulation with Cisco Packet Tracer.',
    icon: 'workflow',
  },
]

/**
 * Hands-on security projects and labs. Stays empty until there's a
 * real one — see ProjectsPanel.tsx for the empty-state handling. Never
 * populate with example entries.
 */
export const securityProjects: SecurityProject[] = []
