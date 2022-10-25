module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Aeonik', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
      },
      screens: {
        "2xl": "1600px",
        "3xl": "1920px"
      },
    },
  },
  plugins: []
}