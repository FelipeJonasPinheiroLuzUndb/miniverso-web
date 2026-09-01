import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['miniverso-icon.svg'],
      manifest: {
        name: 'Miniverso',
        short_name: 'Miniverso',
        description: 'Experiências imersivas para transformar desafios reais.',
        theme_color: '#111827',
        background_color: '#f5f3ee',
        display: 'standalone',
        start_url: '/',
        lang: 'pt-BR',
        icons: [
          {
            src: '/miniverso-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        navigateFallback: 'index.html'
      }
    })
  ],
  server: {
    port: 5187,
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
