/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color-dark': '#390b7f',
        'secondary-color-dark': '#65910d',
        'accent-color-dark': '#3aee76',
        'text-color-dark': '#f7f4fa',

        'background-color': '#efe3fc',
        'primary-color': '#af80f4',
        'secondary-color': '#c6f26e',
        'accent-color': '#11c54d',
        'text-color': '#08050a',
      },
      
      fontFamily: {
        custom: ['Bungee Outline', 'serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class'
  
}

