import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const config = {
    base: './',
    build: {},
    server: {},
    resolve: {
      alias: {
        '~': '/',
        '@': '/src',
      },
    },
  }

  if (mode === 'development') {
    config.server = Object.assign(config.server, {
      port: 5173,
    })
  }

  if (mode === 'production') {
    config.build = Object.assign(config.build, {
      rollupOptions: {
        output: {
          manualChunks: {
            phaser: ['phaser'],
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          passes: 2,
        },
        mangle: true,
        format: {
          comments: false,
        },
      },
    })
  }

  return config
})
