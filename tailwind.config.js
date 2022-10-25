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
        'off-white': {
          DEFAULT: '#F8F3ED',
          dark: '#E1D7CD'
        },
        'purple': {
          DEFAULT: '#965578',
          dark: '#3C3746'
        },
        'blue': {
          DEFAULT: '#C8C8D2',
          dark: '#9696A0'
        },
        'soft-black': {
          DEFAULT: '#373232',
          dark: '#141414',
        },
        'yellow': {
          DEFAULT: '#FFAF2D',
          dark: '#966E46'
        },
        'orange': {
          DEFAULT: '#F07837',
          dark: '#A04B32',
        }
      },
      screens: {
        "2xl": "1600px",
        "3xl": "1920px"
      },
    },
  },
  plugins: []
}