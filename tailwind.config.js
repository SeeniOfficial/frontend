/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0084A7",
        secondary: "#007C66",
        neutral: "#FFA17A",
        success: "#00D600",
        error: "#FF0000",
        whyte: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
