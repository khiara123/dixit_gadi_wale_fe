/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233,10%,33%)',
        garkGrayishBlue: 'hsl(210,10%,33%)',
        grayishBlue: 'hsl(201,11%,66%)',
    }
  },
  plugins: [],
}
}