/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    fontFamily: {
    },
  extend: {
      fontFamily: {
        "standard": ["Inter var", "-apple-system", "BlinkMacSystemFont, Montserrat"],
        apple: ["-apple-system", "BlinkMacSystemFont"],
        },
      }
  },
  plugins: [require("daisyui")],
}

