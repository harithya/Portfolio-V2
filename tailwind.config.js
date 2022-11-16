module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'doodle': ['Gochi Hand', 'cursive']
    },
    extend: {
      cursor: {
        // pencil
        'pencil': "url(/img/pencil.png) 0 24, auto",
        'pencil-dark': "url(/img/pencil-invert.png) 0 24, auto",
      }
    },
  },
  plugins: [],
}