import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, './models'),
      '@styles': path.resolve(__dirname, './client/styles'),
      '@assets': path.resolve(__dirname, './client/assets'),
      '@pages': path.resolve(__dirname, './client/pages'),
      '@components': path.resolve(__dirname, './client/components'),
    },
  },
})
