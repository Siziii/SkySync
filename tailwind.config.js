/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "base":"#121215",
      "widget-dark":"#1C1B1E",
      "widget-dark-s":"#29272C",
      "widget-light":"#2F2E31",
      "widget-light-s":"#37363A",
    },
    extend: {},
  },
  plugins: [],
}

