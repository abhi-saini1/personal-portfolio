import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        ssm: "450px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1300px",
        xxl: '1500px'
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lora: ['Lora', 'serif']
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity:" 1 "},
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;