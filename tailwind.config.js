/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#024873",       // Azul principal
        secundario: "#025373",    // Otro azul
        celeste: "#73BCD9",       // Celeste
        oscuro: "#024959",        // Azul oscuro
        gris: "#F0F1F2",          // Gris claro
      },
      fontFamily: {
        cursive: ['var(--font-dancing)'], // Fuente personalizada
      },
    },
  },
  plugins: [],
}
