import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const projectId = env.VITE_SANITY_PROJECT_ID?.trim()

  return {
    plugins: [react()],
    server: projectId
      ? {
          proxy: {
            '/sanity-api': {
              target: `https://${projectId}.api.sanity.io`,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/sanity-api/, ''),
              configure: (proxy) => {
                proxy.on('proxyReq', (proxyReq) => {
                  proxyReq.removeHeader('origin')
                })
              },
            },
          },
        }
      : undefined,
  }
})
