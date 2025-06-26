/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out forwards",
        crawl: "crawl 20s linear forwards",
        pulseSlow: "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        crawl: {
          "0%": {
            transform: "translateZ(0) rotateX(20deg) translateY(100%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateZ(-300px) rotateX(25deg) translateY(-200%)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
