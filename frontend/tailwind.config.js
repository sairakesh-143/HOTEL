/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          maroon: '#6b2d2f',
          'maroon-dark': '#552325',
          'maroon-light': '#8a3d3f',
          gold: '#cfa65a',
          'gold-dark': '#b8923e',
          'gold-light': '#e4c47a',
          cream: '#f9f6f0',
          'cream-dark': '#f0ebe0',
          charcoal: '#2d2a26',
          'charcoal-light': '#4a4640',
          beige: '#f5f0e8',
        },
        status: {
          success: '#3d7a5f',
          'success-bg': '#ecf5f0',
          pending: '#a07c3a',
          'pending-bg': '#fdf6e8',
          error: '#9b3b3b',
          'error-bg': '#fdf0f0',
          neutral: '#6b7280',
          'neutral-bg': '#f3f4f6',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'card': '0.5rem',
        'button': '0.375rem',
        'badge': '0.25rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04)',
        'sidebar': '2px 0 8px 0 rgba(0,0,0,0.1)',
        'dropdown': '0 4px 16px 0 rgba(0,0,0,0.12)',
        'chat': '0 8px 32px 0 rgba(0,0,0,0.16)',
      },
      spacing: {
        'sidebar': '16.5rem',
        'header': '4.5rem',
      },
      animation: {
        'skeleton': 'skeleton 1.8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        skeleton: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
