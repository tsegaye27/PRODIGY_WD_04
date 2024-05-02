import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        primary: {
          400: "#00BFFF", // Yellow-400
        },
        primer: {
          300: "#00BFFF", // Yellow-400
        },
        secondary: {
          500: "#8fffff", // Custom secondary color
        },
      },
    },
  },
  plugins: [],
};
export default config;
