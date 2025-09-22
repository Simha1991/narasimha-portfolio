// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages needs the base path set to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/narasimha-portfolio/', 
})
