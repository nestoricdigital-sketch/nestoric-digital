/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      keyframes: {
        // Top line: from top-right toward center
        'scroll-down': {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-50%)' },
        },
        // Bottom line: from bottom-left toward center
        'scroll-up': {
          '0%': { transform: 'translate(-50%)' },
          '100%': { transform: 'translate(0)' },
        },
          float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        left: 'scroll-down 10s linear infinite',
        right: 'scroll-up 10s linear infinite',

         'float-slow': 'float 4s ease-in-out infinite',
      },
    },
     fontFamily: {
        inter: ['Inter', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        mada: ['Mada', 'sans-serif'],
      },
  },
  plugins: [],
}

