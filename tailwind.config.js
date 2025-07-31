/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        amber: {
          50: '#fff8f0',
          100: '#ffefd6',
          200: '#ffdfad',
          300: '#ffce85',
          400: '#ffbe5c',
          500: '#ffae33',
          600: '#e6951e',
          700: '#b37417',
          800: '#805310',
          900: '#4d320a',
        },
        // Additional culinary-inspired colors
        culinary: {
          parchment: '#f8f4e9',
          spice: '#a35709',
          herb: '#5a7247',
          zest: '#e67c25',
        }
      },
      backgroundImage: {
        'textured-paper': "url('/src/assets/hero-texture.jpg')",
        'recipe-card': "linear-gradient(rgba(255, 251, 240, 0.9), rgba(255, 251, 240, 0.9))",
      },
      boxShadow: {
        'recipe': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'culinary': '0 4px 20px rgba(146, 64, 14, 0.15)',
        'ingredient': '0 2px 12px rgba(146, 64, 14, 0.1)',
      },
      animation: {
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form input styling
    require('@tailwindcss/typography'), // For better recipe content typography
  ],
}