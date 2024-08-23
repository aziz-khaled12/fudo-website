/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5",
        primary: "#EB5757",
        accent: "#FEE9DE",
        gray1: "#333333",
        gray2: "#E0E0E0",
        gray3: "#828282",
      },
      lineHeight: {
        'extra-loose': '90px',
      }
    },
  },
  plugins: [],
}