import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#606c38',
        secondary: '#283618',
        content: '#ccd5ae',
        background: '#faedcd',
        foreground: '#d4a373',
        black: '#000000',
        white: '#ffffff',
      },

    },
  },
  plugins: [],
};
export default config;
