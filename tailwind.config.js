/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B9FF66',
        secondary: '#191A23',
        tertiary: '#F3F3F3',
        dark: '#292A32',
      },
      fontFamily: {
        'positivus': ['Positivus', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', '76px'],
        'h2': ['48px', '56px'],
        'h3': ['32px', '40px'],
        'h4': ['24px', '32px'],
        'body': ['16px', '24px'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 