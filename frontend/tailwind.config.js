/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1400px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
      colors: {
        whitish: "#fff",
        primary: "#000",
        secondary: "#B59D5A",
      },
      backgroundImage: {
        drawerBG: "url('./src/assets/images/drawer2.png')",
      },
    },
  },
  plugins: [],
};
