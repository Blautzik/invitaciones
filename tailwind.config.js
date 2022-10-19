module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '.src/**/*{js,jsx,ts,tsx}',
  ],
  darkMode: false,
   theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }