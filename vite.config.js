import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcjs from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/iosinsights/',
  plugins: [react(), tailwindcjs()],
})
