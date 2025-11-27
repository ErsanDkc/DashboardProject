/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Keep existing custom breakpoints for backward compatibility
      'mq279': {
        raw: "screen and (min-width: 451px) and (max-width: 750px)",
      },
      'mq450': {
        raw: "screen and (min-width: 751px) and (max-width: 1050px)",
      },
      'mq1050': {
        raw: "screen and (min-width: 1051px) and (max-width: 1200px)",
      },
    },
    
    extend: {
      // colors: {
      //   primary: {
      //     50: '#DBEAFE',
      //     100: '#BFDBFE',
      //     200: '#93C5FD',
      //     300: '#60A5FA',
      //     400: '#3B82F6',
      //     500: '#2563EB',
      //     600: '#1D4ED8',
      //     700: '#1E40AF',
      //   },
      //   gray: {
      //     50: '#F9FAFB',
      //     100: '#F3F4F6',
      //     200: '#E5E7EB',
      //     300: '#D1D5DB',
      //     400: '#9CA3AF',
      //     500: '#6B7280',
      //     600: '#4B5563',
      //     700: '#374151',
      //     800: '#1F2937',
      //     900: '#111827',
      //   },
      //   success: {
      //     50: '#DCFCE7',
      //     100: '#BBF7D0',
      //     200: '#86EFAC',
      //     300: '#4ADE80',
      //     400: '#22C55E',
      //     500: '#16A34A',
      //     600: '#15803D',
      //     700: '#166534',
      //   },
      //   warning: {
      //     50: '#FEF3C7',
      //     100: '#FDE68A',
      //     200: '#FCD34D',
      //     300: '#FBBF24',
      //     400: '#F59E0B',
      //     500: '#D97706',
      //     600: '#B45309',
      //     700: '#92400E',
      //   },
      //   danger: {
      //     50: '#FEE2E2',
      //     100: '#FECACA',
      //     200: '#FCA5A5',
      //     300: '#F87171',
      //     400: '#EF4444',
      //     500: '#DC2626',
      //     600: '#B91C1C',
      //     700: '#991B1B',
      //   },
      // },
      
    },
  },

  corePlugins: {
    preflight: false,
  }
}
