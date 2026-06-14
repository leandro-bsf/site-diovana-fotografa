import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Adicione isso se você quiser o novo modo do Vite

export default defineConfig({
  plugins: [
    react(),
  
  ],
})