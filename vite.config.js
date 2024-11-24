import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://pop-toys.onrender.com:10000',
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './client/components'),
      '@context': path.resolve(__dirname, './client/context'),
      '@hooks': path.resolve(__dirname, './client/hooks'),
      '@pages': path.resolve(__dirname, './client/pages'),
      '@models': path.resolve(__dirname, './models'),
    },
  },
})
