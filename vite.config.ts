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
    target: 'esnext',
    outDir: './docs'
  },
  plugins: [
    react(),
    Windicss(),
    VitePluginMonacoEditor({
      languageWorkers: ['editorWorkerService', 'json', 'typescript'],
      publicPath: 'https://works-wings.oss-cn-hangzhou.aliyuncs.com/json-to-typescript/worker' // 使用CDN资源
    })
  ]
}))
