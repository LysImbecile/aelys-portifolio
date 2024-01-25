/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: { 
      fontFamily : {
        'custom' : ['MPLUS'],
        'ubuntu' : ['UBUNTU'],
        'kurale'  : ['KURALE']
      }
    }
  },
  plugins: []
}
