/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Palette generale del sito
        navy: "#020b2d",
        "gray-text": "#5F6575",

        // Palette specifica Termini e Condizioni
        terms: {
          title: "#020b2d",        // Titolo principale
          subtitle: "#5F6575",     // Sottotitolo
          article: "#020b2d",      // Titoli articoli
          text: "#5F6575",         // Corpo del contenuto
        },
      },

      
    },
  },
  plugins: [],
}
