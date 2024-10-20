/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/images/bg-header-desktop.svg')"
      },
      colors: {
        darkCyan: "hsl(180, 29%, 50%)",
        lighGrayishCyanFilter: "hsl(180, 31%, 95%);",
        veryDarkGrayCyan: "hsl(180, 14%, 20%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)"
      }
    },
    screens: {
      smm : "375px"
    }
  },
  plugins: [],
}

