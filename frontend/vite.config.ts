import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Put all node_modules dependencies into a single vendor chunk
            return 'vendor'
          }
        }
      }
    },
    // Increase warning limit if you want (optional)
    chunkSizeWarningLimit: 1000, // 1000kb = 1MB
  }
})
