/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      primary: {
        DEFAULT: "hsl(171, 66%, 44%)",
        dark: "hsl(171, 60%, 38%)",
      },
      secondary: {
        DEFAULT: "hsl(233, 100%, 69%)",
        dark: "hsl(233, 70%, 58%)",
      },
      neutral: {
        DEFAULT: "hsl(201, 11%, 66%)",
        dark: "hsl(210, 10%, 33%)",
      },
      white: "#FFFFFF",
    },
    backgroundImage: {
      desktop: "var(--bg-image-desktop)",
      mobile: "var(--bg-image-mobile)",
    },
    extend: {
      maxWidth: {
        "3xl": "46rem",
      },
      dropShadow: {
        primary: [
          "0 15px 10px hsla(171, 66%, 44%, 0.08)",
          "0 10px 8px hsla(171, 66%, 44%, 0.15)",
        ],
        secondary: [
          "0 15px 10px hsla(233, 100%, 69%, 0.08)",
          "0 10px 8px hsla(233, 100%, 69%, 0.15)",
        ],
      },
      fontSize: {
        "2xl": ["1.75rem", "2.25rem"],
        "4xl": ["2.75rem", "2.5rem"],
      },
    },
  },
  plugins: [],
};
