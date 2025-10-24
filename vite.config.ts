import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages builds we need to set the `base` to the repo name
// Example: https://<user>.github.io/belongingphotovideo/ -> base: '/belongingphotovideo/'
// We read GH_PAGES env var in CI/workflow and fall back to '/' for local dev.
export default defineConfig(() => {
  const base = process.env.GH_PAGES === 'true' ? '/belongingphotovideo/' : '/'

  return {
    base,
    plugins: [react()],
  }
})
