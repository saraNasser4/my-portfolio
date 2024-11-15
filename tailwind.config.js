/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color-dark': '#390b7f',
        'accent-color-dark': '#3aee76',
        'text-color-dark': '#f7f4fa',

        'background-color': '#E5E5E5',
        'primary-color': '#af80f4',
        'accent-color': '#11c54d',
        'text-color': '#08050a',
      },
      
      fontFamily: {
        custom: ['Bungee Outline', 'serif'],
        handWriting : ['Indie Flower', 'cursive'],
      }
    },
  },
  plugins: [],
  darkMode: 'class'
  
}

