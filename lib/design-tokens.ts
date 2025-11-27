/**
 * Design Tokens for Luxe Excursions Tenerife
 * Centralized design system values for consistent UI
 */

// Brand Colors
export const colors = {
  luxe: {
    gold: '#E0C469',
    goldDark: '#d1b15a',
    black: '#070707',
    grayDark: '#252525',
    grayMedium: '#5A5A5A',
    grayLight: '#2C2C2C',
    white: '#FEFEFE',
  },
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
} as const;

// Typography Scale
export const typography = {
  headings: {
    display: {
      fontFamily: 'font-anton',
      fontSize: 'text-4xl md:text-5xl lg:text-[64px]',
      fontWeight: 'font-normal',
      lineHeight: 'leading-tight',
      tracking: 'tracking-normal',
    },
    h1: {
      fontFamily: 'font-anton',
      fontSize: 'text-3xl md:text-4xl lg:text-5xl',
      fontWeight: 'font-normal',
      lineHeight: 'leading-tight',
      tracking: 'tracking-normal',
    },
    h2: {
      fontFamily: 'font-anton',
      fontSize: 'text-2xl md:text-3xl lg:text-4xl',
      fontWeight: 'font-normal',
      lineHeight: 'leading-tight',
      tracking: 'tracking-normal',
    },
    h3: {
      fontFamily: 'font-anton',
      fontSize: 'text-xl md:text-2xl lg:text-3xl',
      fontWeight: 'font-normal',
      lineHeight: 'leading-tight',
      tracking: 'tracking-normal',
    },
  },
  body: {
    large: {
      fontFamily: 'font-inter',
      fontSize: 'text-lg',
      fontWeight: 'font-normal',
      lineHeight: 'leading-relaxed',
    },
    base: {
      fontFamily: 'font-inter',
      fontSize: 'text-base',
      fontWeight: 'font-normal',
      lineHeight: 'leading-normal',
    },
    small: {
      fontFamily: 'font-inter',
      fontSize: 'text-sm',
      fontWeight: 'font-normal',
      lineHeight: 'leading-normal',
    },
  },
  accent: {
    fontFamily: 'font-poltawski',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
  },
} as const;

// Spacing Scale
export const spacing = {
  section: {
    padding: 'py-16 md:py-20 lg:py-24',
    gap: 'gap-8 md:gap-12',
  },
  container: {
    padding: 'px-4 md:px-8 lg:px-20',
  },
  card: {
    padding: 'p-6 md:p-8',
  },
  button: {
    padding: 'px-6 py-3 md:px-8 md:py-4',
  },
} as const;

// Border Radius Scale
export const borderRadius = {
  sm: 'rounded-luxe-sm',
  md: 'rounded-luxe-md',
  lg: 'rounded-luxe-lg',
  xl: 'rounded-luxe-xl',
  '2xl': 'rounded-luxe-2xl',
} as const;

// Component Variants
export const components = {
  button: {
    primary: 'bg-luxe-gold hover:bg-luxe-gold-dark text-black font-medium transition-colors',
    secondary: 'bg-transparent border-2 border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-black transition-colors',
    outline: 'border border-luxe-gray-dark text-luxe-gray-dark hover:bg-luxe-gray-dark hover:text-white transition-colors',
  },
  card: {
    default: 'bg-white border border-gray-200 rounded-luxe-lg shadow-lg',
    elevated: 'bg-white border border-gray-200 rounded-luxe-lg shadow-xl',
    dark: 'bg-luxe-black border border-luxe-gray-light rounded-luxe-lg',
  },
  input: {
    default: 'border border-luxe-black rounded-luxe-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxe-gold',
  },
} as const;

// Animation Durations
export const animations = {
  fast: 'duration-200',
  normal: 'duration-300',
  slow: 'duration-500',
} as const;

// Typography Class Combinations (for easy use)
export const typographyClasses = {
  display: `${typography.headings.display.fontFamily} ${typography.headings.display.fontSize} ${typography.headings.display.fontWeight} ${typography.headings.display.lineHeight} ${typography.headings.display.tracking}`,
  h1: `${typography.headings.h1.fontFamily} ${typography.headings.h1.fontSize} ${typography.headings.h1.fontWeight} ${typography.headings.h1.lineHeight} ${typography.headings.h1.tracking}`,
  h2: `${typography.headings.h2.fontFamily} ${typography.headings.h2.fontSize} ${typography.headings.h2.fontWeight} ${typography.headings.h2.lineHeight} ${typography.headings.h2.tracking}`,
  h3: `${typography.headings.h3.fontFamily} ${typography.headings.h3.fontSize} ${typography.headings.h3.fontWeight} ${typography.headings.h3.lineHeight} ${typography.headings.h3.tracking}`,
  bodyLarge: `${typography.body.large.fontFamily} ${typography.body.large.fontSize} ${typography.body.large.fontWeight} ${typography.body.large.lineHeight}`,
  body: `${typography.body.base.fontFamily} ${typography.body.base.fontSize} ${typography.body.base.fontWeight} ${typography.body.base.lineHeight}`,
  bodySmall: `${typography.body.small.fontFamily} ${typography.body.small.fontSize} ${typography.body.small.fontWeight} ${typography.body.small.lineHeight}`,
  accent: `${typography.accent.fontFamily} ${typography.accent.fontSize} ${typography.accent.fontWeight}`,
} as const;

