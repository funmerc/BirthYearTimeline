import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Served from https://funmerc.github.io/BirthYearTimeline/, so assets and
  // public files (e.g. /manifest.json) must be prefixed with the repo path.
  base: '/BirthYearTimeline/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Keep CRA's output directory so existing deploy expectations still hold.
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
