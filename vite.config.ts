import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown, { Mode } from 'vite-plugin-markdown';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdown({
    mode: [Mode.REACT]
  })],
  server: {
    port: 8080,
    open: true
  }
})
