/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C7AF2",
        primarySoft: "#B8B6FF",
        bgLight: "#F6F4FF",
        bgDark: "#0F0F1A",
        cardDark: "#1A1A2E",
      },
    },
  },
  plugins: [],
};
