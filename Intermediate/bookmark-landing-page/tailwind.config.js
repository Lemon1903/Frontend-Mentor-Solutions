/** @type {import("tailwindcss").Config} */
export default {
  content: ["index.html", "src/**/*{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      primary: "hsl(231, 69%, 60%)",
      secondary: "hsl(0, 94%, 66%)",
      neutral: {
        dark: "hsl(229, 31%, 21%)",
        light: "hsl(229, 8%, 60%)",
        lighest: "hsl(100, 100%, 100%)",
      },
    },
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        "5xl": ["3.125rem", 1],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
