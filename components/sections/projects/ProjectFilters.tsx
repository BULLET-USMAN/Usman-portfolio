'use client'

import { cn } from '@/lib/utils'
import { PROJECT_CATEGORIES } from '@/data/projects.data'
import type { Project } from '@/types/content'

interface ProjectFiltersProps {
  categories: Project['category'][]
  active: Project['category'] | 'all'
  onChange: (category: Project['category'] | 'all') => void
}

export function ProjectFilters({ categories, active, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      <FilterButton label="All" isActive={active === 'all'} onClick={() => onChange('all')} />
      {categories.map((category) => (
        <FilterButton
          key={category}
          label={PROJECT_CATEGORIES[category]}
          isActive={active === category}
          onClick={() => onChange(category)}
        />
      ))}
    </div>
  )
}

interface FilterButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'rounded-full border px-4 py-1.5 text-sm transition-colors duration-200',
        isActive
          ? 'border-accent-line bg-accent-dim text-accent'
          : 'border-border text-text-secondary hover:border-border-strong hover:text-text-primary'
      )}
    >
      {label}
    </button>
  )
}
