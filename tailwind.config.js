/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ["Fira Code", "monospace"],
      serif: ["EB Garamond", "serif"]
    },
    extend: {
      spacing: {
        "144": "36rem"
      }
    },
  },
  plugins: [],
}

