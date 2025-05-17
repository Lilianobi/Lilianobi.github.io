import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/acti-react-app/acti-coffee/',  // 🔁 CHANGE THIS
  plugins: [react()],
});

