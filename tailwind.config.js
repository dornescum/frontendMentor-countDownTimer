module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'red-hat': ['"red-hat"', 'sans-serif'],
      },
      colors: {
        myGray: "#8486a9",
        darkGray:"#343650",
        myRed:"#fb6087",
        darkBlue:"#1e1f29",
        dark:"#191a24",
      }
    },
  },
  plugins: [],
}
