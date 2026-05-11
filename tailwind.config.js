/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        luxury: "0 24px 90px rgba(0, 0, 0, 0.32)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(216, 180, 106, 0.18), transparent 25%)"
      }
    }
  },
  plugins: []
};
