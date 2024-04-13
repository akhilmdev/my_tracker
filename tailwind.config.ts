import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      text: "#ffffff",
      background: "#ffffff",
      white: "#fff",
      black: "#000",
      button: "#f87171",
      border: "#5d5d5d",
      icon: "#ffffff",
      pageBackground: "#1d1d1d",
      dateBackground: "#f59e0b",
      dueDateBackground: colors.yellow[500],
      tagBackground: colors.orange[500],
      cardBackground: colors.indigo[200],
    },
    fontFamily: {
      affermations: "Madimi One, sans-serif",
    },
  },
  plugins: [],
};
export default config;
