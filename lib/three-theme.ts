/**
 * Three.js materials need real hex values, not CSS custom properties.
 * Keep these in sync with the tokens in app/globals.css by hand —
 * there are only a few, so duplication is cheaper than a build step.
 */
export const THREE_COLORS = {
  accent: '#34e5a1',
  bg: '#08090b',
  line: '#2a2c30',
} as const
