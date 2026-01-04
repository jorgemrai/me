import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F7",
        text: "#212429",
        heading: "#000000",
        accent: "#1F7AE0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
