/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      body: ["Outfit", "sans-serif"],
      special: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        brown: "#1b1412",
        lightBrown: "#2e211c",
        darkBrown: "#08070b", // Deep luxury slate/black background
        black: "#020104",
        white: "#f8fafc",
        cyan: "#06b6d4",
        lightCyan: "#67e8f9",
        darkCyan: "#0891b2",
        orange: "#f97316",
        lightOrange: "#fdba74",
        darkOrange: "#ea580c",
        grey: "#64748b",
        lightGrey: "#94a3b8",
        darkGrey: "#1e293b",
        // Add semantic colors
        bgDark: "#030206",
        cardBg: "#0d0b13",
      },
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(6, 182, 212, 0.3)",
        cyanBigShadow: "0px 0px 100px 50px rgba(6, 182, 212, 0.1)",
        cyanMediumShadow: "0px 0px 50px 25px rgba(6, 182, 212, 0.15)",
        orangeBigShadow: "0px 0px 100px 50px rgba(249, 115, 22, 0.1)",
        orangeMediumShadow: "0px 0px 50px 25px rgba(249, 115, 22, 0.15)",
        glow: "0 0 30px 5px rgba(99, 102, 241, 0.15)",
      },
    },
  },
  plugins: [require("daisyui")],
};
