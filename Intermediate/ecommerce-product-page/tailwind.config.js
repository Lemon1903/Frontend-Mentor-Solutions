/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "hsl(25, 100%, 94%)",
          dark: "hsl(26, 100%, 55%)",
        },
        neutral: {
          "very-dark": "hsl(218, 73%, 3%)",
          dark: "hsl(219, 9%, 45%)",
          DEFAULT: "hsl(220, 14%, 75%)",
          light: "hsl(223, 64%, 98%)",
        },
      },
    },
    screens: {
      mobile: { max: "1023.5px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
