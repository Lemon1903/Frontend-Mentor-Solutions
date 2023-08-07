/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(35, 77%, 62%)",
      secondary: "hsl(5, 85%, 63%)",
      neutral: {
        light: "hsl(36, 100%, 99%)",
        DEFAULT: "hsl(233, 8%, 79%)",
        dark: "hsl(236, 13%, 42%)",
        darkest: "hsl(240, 100%, 5%)",
      }
    },
    fontWeight: {
      normal: 400,
      bold: 700,
      "extra-bold": 800,
    },
    extend: {},
  },
  plugins: [],
}

