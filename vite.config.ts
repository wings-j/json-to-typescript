import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Windicss from 'vite-plugin-windicss'
import Path from 'path'
import VitePluginMonacoEditor from 'vite-plugin-monaco-editor'

export default defineConfig(({ mode }) => ({
  base: './',
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'esnext'
  },
  plugins: [
    react(),
    Windicss(),
    VitePluginMonacoEditor({
      languageWorkers: ['editorWorkerService', 'json', 'typescript'],
      publicPath: 'https://unpkg.com/vite-plugin-monaco-editor@1.0.5/cdn' // 使用CDN资源
    })
  ]
}))
