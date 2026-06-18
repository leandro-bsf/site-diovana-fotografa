/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adiciona a classe 'font-signature'
        signature: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        // Adiciona a classe 'text-signature-color'
        'signature-color': '#A68979',
       
      },
    },
  },
  plugins: [],
}