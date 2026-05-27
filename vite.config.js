import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
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
