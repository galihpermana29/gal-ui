/**
 * Synergy Design System - Tailwind CSS Preset
 * 
 * This preset contains the design tokens and configuration
 * needed to use @synergysg/ui-components in your project.
 * 
 * Usage in your tailwind.config.js:
 * 
 * module.exports = {
 *   presets: [require('@synergysg/ui-components/tailwind.preset')],
 *   content: [
 *     './src/**\/*.{js,ts,jsx,tsx}',
 *     './node_modules/@synergysg/ui-components/dist/**\/*.{js,mjs}',
 *   ],
 *   // ... your custom config
 * }
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // TEXT
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-quaternary': 'var(--text-quaternary)',
        'text-white': 'var(--text-white)',
        'text-disabled': 'var(--text-disabled)',
        'text-placeholder': 'var(--text-placeholder)',
        'text-brand-primary': 'var(--text-brand-primary)',
        'text-brand-secondary': 'var(--text-brand-secondary)',
        'text-error-primary': 'var(--text-error-primary)',
        'text-warning-primary': 'var(--text-warning-primary)',
        'text-success-primary': 'var(--text-success-primary)',

        // BORDER
        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        'border-tertiary': 'var(--border-tertiary)',
        'border-disabled': 'var(--border-disabled)',
        'border-brand': 'var(--border-brand)',
        'border-error': 'var(--border-error)',
        'border-error_subtle': 'var(--border-error_subtle)',
        'border-popup': 'var(--border-popup)',

        // FOREGROUND
        'fg-primary': 'var(--fg-primary)',
        'fg-secondary': 'var(--fg-secondary)',
        'fg-tertiary': 'var(--fg-tertiary)',
        'fg-quaternary': 'var(--fg-quaternary)',
        'fg-white': 'var(--fg-white)',
        'fg-disabled': 'var(--fg-disabled)',
        'fg-brand-primary': 'var(--fg-brand-primary)',
        'fg-error-primary': 'var(--fg-error-primary)',
        'fg-warning-primary': 'var(--fg-warning-primary)',
        'fg-success-primary': 'var(--fg-success-primary)',

        // BACKGROUND
        'bg-primary': 'var(--bg-primary)',
        'bg-primary_hover': 'var(--bg-primary_hover)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-secondary_hover': 'var(--bg-secondary_hover)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-quaternary': 'var(--bg-quaternary)',
        'bg-disabled': 'var(--bg-disabled)',
        'bg-brand-primary': 'var(--bg-brand-primary)',
        'bg-brand-secondary': 'var(--bg-brand-secondary)',
        'bg-error-primary': 'var(--bg-error-primary)',
        'bg-error-secondary': 'var(--bg-error-secondary)',
        'bg-warning-primary': 'var(--bg-warning-primary)',
        'bg-success-primary': 'var(--bg-success-primary)',

        // BUTTONS
        'button-primary-bg': 'var(--button-primary-bg)',
        'button-primary-bg_hover': 'var(--button-primary-bg_hover)',
        'button-primary-fg': 'var(--button-primary-fg)',
        'button-primary-bg_disabled': 'var(--button-primary-bg_disabled)',
        'button-primary-error-bg': 'var(--button-primary-error-bg)',
        'button-primary-error-bg_hover': 'var(--button-primary-error-bg_hover)',
        'button-primary-error-bg_disabled': 'var(--button-primary-error-bg_disabled)',

        'button-secondary-bg': 'var(--button-secondary-bg)',
        'button-secondary-bg_hover': 'var(--button-secondary-bg_hover)',
        'button-secondary-bg_disabled': 'var(--button-secondary-bg_disabled)',
        'button-secondary-color-bg': 'var(--button-secondary-color-bg)',
        'button-secondary-color-bg_hover': 'var(--button-secondary-color-bg_hover)',
        'button-secondary-color-bg_disabled': 'var(--button-secondary-color-bg_disabled)',
        'button-secondary-border': 'var(--button-secondary-border)',
        'button-secondary-color-border': 'var(--button-secondary-color-border)',
        'button-secondary-color-fg': 'var(--button-secondary-color-fg)',
        'button-secondary-fg': 'var(--button-secondary-fg)',

        'button-secondary-error-bg': 'var(--button-secondary-error-bg)',
        'button-secondary-error-bg_hover': 'var(--button-secondary-error-bg_hover)',
        'button-secondary-error-fg': 'var(--button-secondary-error-fg)',
        'button-secondary-error-border': 'var(--button-secondary-error-border)',

        'button-secondary-success-bg': 'var(--button-secondary-success-bg)',
        'button-secondary-success-bg_hover': 'var(--button-secondary-success-bg_hover)',
        'button-secondary-success-fg': 'var(--button-secondary-success-fg)',
        'button-secondary-success-border': 'var(--button-secondary-success-border)',

        'button-border_disabled': 'var(--button-border_disabled)',
        'button-fg_disabled': 'var(--button-fg_disabled)',

        // UTILITY COLORS
        'utility-gray-50': 'var(--utility-gray-50)',
        'utility-gray-100': 'var(--utility-gray-100)',
        'utility-gray-200': 'var(--utility-gray-200)',
        'utility-gray-300': 'var(--utility-gray-300)',
        'utility-gray-500': 'var(--utility-gray-500)',
        'utility-gray-700': 'var(--utility-gray-700)',

        'utility-brand-50': 'var(--utility-brand-50)',
        'utility-brand-200': 'var(--utility-brand-200)',
        'utility-brand-700': 'var(--utility-brand-700)',

        'utility-error-50': 'var(--utility-error-50)',
        'utility-error-200': 'var(--utility-error-200)',
        'utility-error-300': 'var(--utility-error-300)',
        'utility-error-700': 'var(--utility-error-700)',

        'utility-warning-50': 'var(--utility-warning-50)',
        'utility-warning-300': 'var(--utility-warning-300)',
        'utility-warning-400': 'var(--utility-warning-400)',
        'utility-warning-500': 'var(--utility-warning-500)',
        'utility-warning-700': 'var(--utility-warning-700)',

        'utility-success-50': 'var(--utility-success-50)',
        'utility-success-300': 'var(--utility-success-300)',
        'utility-success-700': 'var(--utility-success-700)',

        'utility-blue-50': 'var(--utility-blue-50)',
        'utility-blue-200': 'var(--utility-blue-200)',
        'utility-blue-700': 'var(--utility-blue-700)',

        'utility-blue-light-50': 'var(--utility-blue-light-50)',
        'utility-blue-light-200': 'var(--utility-blue-light-200)',
        'utility-blue-light-700': 'var(--utility-blue-light-700)',

        'utility-purple-50': 'var(--utility-purple-50)',
        'utility-purple-200': 'var(--utility-purple-200)',
        'utility-purple-700': 'var(--utility-purple-700)',

        'utility-gray-blue-50': 'var(--utility-gray-blue-50)',
        'utility-gray-blue-200': 'var(--utility-gray-blue-200)',
        'utility-gray-blue-400': 'var(--utility-gray-blue-400)',
        'utility-gray-blue-500': 'var(--utility-gray-blue-500)',
        'utility-gray-blue-700': 'var(--utility-gray-blue-700)',

        'utility-pink-50': 'var(--utility-pink-50)',
        'utility-pink-200': 'var(--utility-pink-200)',
        'utility-pink-700': 'var(--utility-pink-700)',

        'utility-orange-50': 'var(--utility-orange-50)',
        'utility-orange-200': 'var(--utility-orange-200)',
        'utility-orange-700': 'var(--utility-orange-700)',
      },
      spacing: {
        xs: '0.375rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },

      // Aliases used in legacy classes inside CSS (to avoid refactors)
      // e.g., text-text-warning-primary, text-text-secondary
      textColor: ({ theme }) => ({
        ...theme('colors'),
        'text-warning-primary': 'var(--text-warning-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-text-warning-primary': 'var(--text-warning-primary)',
        'text-text-secondary': 'var(--text-secondary)',
        'text-button-primary-fg': 'var(--button-primary-fg)',
        'text-button-fg_disabled': 'var(--button-fg_disabled)',
        'text-button-secondary-color-fg': 'var(--button-secondary-color-fg)',
        'text-button-secondary-fg': 'var(--button-secondary-fg, var(--text-secondary))',
      }),

      borderColor: ({ theme }) => ({
        ...theme('colors'),
        'button-primary-bg': 'var(--button-primary-bg)',
        'button-border_disabled': 'var(--button-border_disabled)',
        'button-secondary-color-border': 'var(--button-secondary-color-border)',
        'button-secondary-error-border': 'var(--button-secondary-error-border)',
      }),

      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        'button-primary-bg': 'var(--button-primary-bg)',
        'button-primary-bg_hover': 'var(--button-primary-bg_hover)',
        'button-primary-error-bg': 'var(--button-primary-error-bg)',
        'button-primary-error-bg_hover': 'var(--button-primary-error-bg_hover)',
        'button-primary-error-bg_disabled': 'var(--button-primary-error-bg_disabled)',
        'button-secondary-bg': 'var(--button-secondary-bg)',
        'button-secondary-bg_hover': 'var(--button-secondary-bg_hover)',
        'button-secondary-color-bg': 'var(--button-secondary-color-bg)',
        'button-secondary-color-bg_hover': 'var(--button-secondary-color-bg_hover)',
        'button-secondary-error-bg': 'var(--button-secondary-error-bg)',
        'button-secondary-error-bg_hover': 'var(--button-secondary-error-bg_hover)',
        'button-secondary-success-bg': 'var(--button-secondary-success-bg)',
        'button-secondary-success-bg_hover': 'var(--button-secondary-success-bg_hover)',
      }),
    },
  },
};
