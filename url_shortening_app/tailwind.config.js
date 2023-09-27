/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-it": "url(./images/bg-shorten-desktop.svg)",
        "boost-links": "url(./images/bg-boost-desktop.svg)"
      }
    },
  },
  plugins: [],
}

