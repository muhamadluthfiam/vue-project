module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px'
      },
      extend: {
        screens: {
          '2xl' : '1320px'
        }
      }
    },
  },
  plugins: [],
}
