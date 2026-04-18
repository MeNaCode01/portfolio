/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // slate-900
        primary: "#8b5cf6", // violet-500
        secondary: "#3b82f6", // blue-500
      }
    },
  },
  plugins: [],
}
