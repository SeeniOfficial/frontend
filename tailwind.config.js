/** @type {import('tailwindcss').Config} */
import { useState } from "react";
const ThemeMode = () => {
  const [theme, setTheme] = useState("light");
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
