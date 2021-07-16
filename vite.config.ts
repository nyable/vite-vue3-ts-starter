import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
function resolvePath (val) {
  return path.resolve(__dirname, val)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      "@": resolvePath('./src')
    }
  }
})
