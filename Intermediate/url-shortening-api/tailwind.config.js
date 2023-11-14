/** @type {import("tailwindcss").Config} */
export default {
  content: ["index.html", "src/**/*{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1024px",
        xl: "1280px",
      },
      padding: {
        DEFAULT: "1.5rem",
        lg: "4rem",
      },
    },
    colors: {
      transparent: "transparent",
      primary: "hsl(180, 66%, 49%)",
      secondary: "hsl(257, 27%, 26%)",
      error: "hsl(0, 87%, 67%)",
      neutral: {
        darkest: "hsl(260, 8%, 14%)",
        dark: "hsl(255, 11%, 22%)",
        DEFAULT: "hsl(257, 7%, 63%)",
        light: "hsl(0, 0%, 75%)",
      },
      white: "hsl(100, 100%, 100%)",
    },
    extend: {
      backgroundImage: {
        "shortener-desktop": "url('./assets/bg-shorten-desktop.svg')",
        "shortener-mobile": "url('./assets/bg-shorten-mobile.svg')",
        "boost-desktop": "url('./assets/bg-boost-desktop.svg')",
        "boost-mobile": "url('./assets/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
