/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    extend: {
      colors: {
        primary: "#121416",
        secondary: "#797d85",
      }
    },
  },
  plugins: [],
}
