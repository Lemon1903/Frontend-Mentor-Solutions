/** @type {import("tailwindcss").Config} */
export default {
  content: ["index.html", "src/**/*{js,jsx,ts,tsx,css}"],
  theme: {
    colors: {
      primary: "hsl(4, 100%, 67%)",
      foreground: "hsl(234, 29%, 20%)",
      background: "hsl(235, 18%, 26%)",
      muted: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
