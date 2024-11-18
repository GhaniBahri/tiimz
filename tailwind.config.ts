import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        DodgerBlue: "#1E90FF",
        Coralred: "#FF4466",
        GoldenYellow: "#FFD700",
        EclipsePurple: "#3a3347",
        GhostWhite: "#f5f3f7",
        // Text colors
        TextPrimaryLight: "#252133",  
        TextSecondaryLight: "#6c6980", 
        TextPrimaryDark: "#e8e6f0",   
        TextSecondaryDark: "#9d99ab"
      },
    },
  },
  plugins: [],
};
export default config;
