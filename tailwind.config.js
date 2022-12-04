/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Amatic SC',
        body: '"Dosis", sans-serif;'
      },
      colors: {
        'text-black': '#383131',
        'sky-blue': '#325C84',
        'lighter-yellow': '#FCFAF6',
        'dark-transparent': '#1e1f25cc',
        'pink': '#e18eb4'
      },
      maxWidth: {
        'max-section': '1200px'
      },
      screens: {
        mxl: '1440px'
      }
    }
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
    })
  ]
};
