import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/interactive-water-quality-simulator/',
  
  plugins: [tailwindcss()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ["@babylonjs/havok"],
  },
  build: {
    target: 'esnext',
  },
}); 
