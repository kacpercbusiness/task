import { reactRouter } from '@react-router/dev/vite';
import { envSchema } from './config/env-schema';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const rawEnv = loadEnv(mode, process.cwd(), '');

  const env = envSchema.parse(rawEnv);

  const isProd = mode === 'production';

  return {
    plugins: [
      reactRouter(),
      tsconfigPaths(),

      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true
      })
    ],

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      __VITE_KITTENS_URL__: JSON.stringify(env.VITE_KITTENS_URL),
    },

    server: {
      port: 5173,
      open: true
    },

    preview: {
      port: 5173
    },

    resolve: {
      dedupe: ['react', 'react-dom']
    },

    build: {
      sourcemap: !isProd,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) {
                return 'react-vendor';
              }

              if (id.includes('zod')) {
                return 'zod';
              }

              return 'vendor';
            }

            if (id.includes('/src/routes/')) {
              const match = id.split('/src/routes/')[1];
              if (match) {
                const name = match.split('/')[0];
                return `route-${name}`;
              }
            }
          }
        }
      }
    },

    clearScreen: false
  };
});