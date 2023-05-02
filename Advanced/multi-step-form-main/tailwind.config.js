/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        dark: "hsl(213, 96%, 18%)",
        DEFAULT: "hsl(243, 100%, 62%)",
        light: "hsl(228, 100%, 84%)",
        "very-light": "hsl(206, 94%, 87%)",
      },
      secondary: "hsl(354, 84%, 57%)",
      neutral: {
        400: "hsl(231, 11%, 63%)",
        300: "hsl(229, 24%, 87%)",
        200: "hsl(217, 100%, 97%)",
        100: "hsl(231, 100%, 99%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "sidebar-sm": "url('src/assets/images/bg-sidebar-mobile.svg')",
        "sidebar-lg": "url('src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
