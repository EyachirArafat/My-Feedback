import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  base: '/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});