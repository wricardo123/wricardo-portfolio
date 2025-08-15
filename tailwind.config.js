/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%': { opacity: 0.25, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.15)' },
          '100%': { opacity: 0.4, transform: 'scale(1)' },
        },
        wave: {
          '0%, 80%, 100%': { transform: 'rotate(0deg)' },
          '85%': { transform: 'rotate(14deg)' },
          '90%': { transform: 'rotate(-8deg)' },
          '95%': { transform: 'rotate(14deg)' },
        }
      },
      animation: {
        twinkle: 'twinkle 5s ease-in-out infinite alternate',
        twinkleSlow: 'twinkle 7s ease-in-out infinite alternate',
        twinkleFast: 'twinkle 3s ease-in-out infinite alternate',
        'wave': 'wave 3s ease-in-out infinite'
      },
      fontFamily: {
        knewave: ['"Knewave"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
