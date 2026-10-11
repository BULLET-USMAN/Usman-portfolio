import type { EcommerceStage, EcommerceTool, Stat } from '@/types/content'

/**
 * The Amazon operations workflow. Product Hunting and Product Listing
 * are direct, hands-on experience; the research stages between them
 * are the skills applied along the way — a natural ordering (hunt →
 * research the opportunity → size the market → check competitors →
 * find the right keywords → study effective listings → build the
 * listing), not a claim about any specific real project.
 */
export const ecommerceStages: EcommerceStage[] = [
  {
    id: 'product-hunting',
    label: 'Product Hunting',
    description: 'Identifying potential product opportunities worth deeper research.',
    icon: 'search',
  },
  {
    id: 'product-research',
    label: 'Product Research',
    description: 'Validating those opportunities — demand, feasibility, and fit.',
    icon: 'clipboard',
  },
  {
    id: 'market-research',
    label: 'Market Research',
    description: 'Understanding market size, trends, and customer demand.',
    icon: 'chart',
  },
  {
    id: 'competitor-analysis',
    label: 'Competitor Analysis',
    description: 'Studying existing listings and sellers in a given market.',
    icon: 'crosshair',
  },
  {
    id: 'keyword-research',
    label: 'Keyword Research',
    description: 'Finding the terms customers actually search for.',
    icon: 'hash',
  },
  {
    id: 'listing-research',
    label: 'Listing Research',
    description: 'Studying what makes existing listings effective.',
    icon: 'list',
  },
  {
    id: 'product-listing',
    label: 'Product Listing',
    description: 'Creating and managing product listings — the hands-on operational side of the work.',
    icon: 'package-plus',
  },
]

/**
 * The toolkit. Descriptions cover what each tool is used for — not
 * claimed certifications or proficiency levels.
 */
export const ecommerceTools: EcommerceTool[] = [
  {
    name: 'Excel',
    description: 'Organizing and analyzing research data, from product lists to keyword sets.',
    icon: 'spreadsheet',
  },
  {
    name: 'Helium 10',
    description: 'A suite of tools used for product and keyword research.',
    icon: 'gauge',
  },
  {
    name: 'SellerSprite',
    description: 'Another research tool used for product and market analysis.',
    icon: 'radar',
  },
]

/**
 * Stat cards — same rule as About/Matrix/Cybersecurity: real facts or
 * self-evident counts only, never invented business figures (revenue,
 * sales, client counts).
 */
export const ecommerceStats: Stat[] = [
  { label: 'Role', value: 'Amazon VA', description: 'Virtual Assistant' },
  { label: 'Workflow Stages', value: '7', countTo: 7, description: 'See workflow below' },
  { label: 'Core Tools', value: '3', countTo: 3, description: 'Excel · Helium 10 · SellerSprite' },
]
