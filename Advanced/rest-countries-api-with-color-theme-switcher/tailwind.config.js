/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `hsl(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      background: withOpacity("--color-background"),
      foreground: withOpacity("--color-foreground"),
      main: withOpacity("--color-main"),
      hint: withOpacity("--color-hint"),
      skeleton: withOpacity("--color-skeleton"),
    },
    fontFamily: {
      nunito: "Nunito Sans, sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        // countries: "repeat(auto-fill, 280p
        countries: "repeat(auto-fill, minmax(280px,1fr))",
      },
      brightness: {
        hover: "var(--brightness)",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
