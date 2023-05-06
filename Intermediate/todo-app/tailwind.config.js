/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      heading: "var(--heading)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      muted: "var(--muted)",
      accent: "var(--accent)",
    },
    extend: {
      fontSize: {
        "heading-sm": ["2rem", { letterSpacing: "0.5rem" }],
        "heading-lg": ["2.75rem", { letterSpacing: "0.9rem" }],
      },
      backgroundImage: {
        desktop: "var(--desktop)",
        mobile: "var(--mobile)",
        check: "var(--check-background)",
      },
      backgroundSize: {
        sm: "100% 200px",
        lg: "100% 300px",
      },
      minWidth: {
        check: "24px",
        remove: "18px",
      },
    },
  },
  plugins: [],
};
