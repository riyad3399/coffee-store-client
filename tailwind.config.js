/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url('/images/8.png')",
        banner2:  "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url('/images/5.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

