/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    fontFamily: {
    },
    colors: {
      action: "#006EBE",
      black:"black",
      white:"white",

},
  extend: {
      fontFamily: {
        "standard": ["Inter var", "-apple-system", "BlinkMacSystemFont", "Montserrat"],
        apple: ["-apple-system", "BlinkMacSystemFont"],
        },
      }
  },
  plugins: [require("daisyui")],
}

