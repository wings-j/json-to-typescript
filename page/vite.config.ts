import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Windicss from 'vite-plugin-windicss'
import Path from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'esnext'
  },
  plugins: [react(), Windicss()]
})
