/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0EF387",
        "secondary": "#FAFAFA",
        "black": "#000000",
        "tertiary": "#110f0f"
      },
      width: {
        "w-p": "611px",
        "w-b": "575px",
        "w-8": "533px",
        "w-btn": "303px"
      },
      height: {
        "h-p": "568px",
        "h-b": "320px",
        "h-btn": "121px"
      }
    },
  },
  plugins: [],
}

