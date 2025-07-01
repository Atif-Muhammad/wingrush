/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'opacity-80': 'rgba(31, 41, 55, 0.7)' ,// Customize as needed
        'opacity-70': 'rgba(31, 41, 55, 0.9)' ,// Customize as needed
        'opacity-60': 'rgba(31, 41, 55, 0.4)' ,// Customize as needed


      },
      borderImage: {
        'gradient-3': 'linear-gradient(to right, #4f46e5, #7e22ce, #ec4899)',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
      gridTemplateColumns: {
        'custom': '20% 40% 30%',
      },
      colors: {
        'button': '#fc2020', // cyan-600
        'hover-button': '#e20000', // cyan-800
        'button-border': '#af0000', // cyan-700
        'hover-button-border': '#c60000', // cyan-900
      },
    },
  },
  plugins: [
    
  ],
}