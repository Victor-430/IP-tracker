/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/images/pattern-bg-desktop.png')",
        mobile: "url('/src/assets/images/pattern-bg-mobile.png')",
      },
      fontFamily: {
        rubik: ["Rubik, sans-serif"],
      },
    },
  },
  plugins: [],
};
