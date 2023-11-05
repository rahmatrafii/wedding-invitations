import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shape-1": "url('/image/shape-1.svg')",
      },
      textColor: {
        blue: "#5AA0D6",
      },
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.1)" },
      },
      floating: {
        "0%": { transform: "translateY(0)", opacity: "0.7" },
        "100%": { transform: "translateY(-35px)", opacity: "0" },
      },
      fadeInUp: {
        "0%": {
          opacity: "0",
          transform: "translateY(40px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      fadeInDown: {
        "0%": {
          opacity: "0",
          transform: "translateY(0)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(40px)",
        },
      },
    },
    animation: {
      wiggle: "wiggle 2s ease-in-out 1s infinite",
      floating: "floating 2s ease-in-out 0.5s infinite",
      floating2: "floating 2s ease-in-out infinite",
      "fade-up": "fadeInUp 1s ease-in-out",
      "fade-up-d": "fadeInUp 1s ease-in-out 1s",
      "fade-down": "fadeInDown 1s ease-in-out",
    },
  },
  plugins: [],
};
export default config;
