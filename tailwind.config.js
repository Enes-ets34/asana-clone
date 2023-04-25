/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        md: "850px",
      },
    },
    important: true,
  },
  plugins: [],
};
