import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5173,
    strictPort: true, // Ensure the port is strictly used, and Vite will exit if it can't bind
    // Optional: add this to handle CORS issues
    cors: true
  }
});
