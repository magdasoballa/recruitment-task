import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Plugin dla Reacta
import laravel from 'laravel-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
        fastRefresh: false, 
        jsx: 'react',
      }), 
    laravel({
      input: [
        'resources/js/app.jsx', // Twoje źródło dla Reacta
        'resources/css/app.css', // Twoje źródło dla CSS
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js', // Alias do folderu, gdzie są Twoje pliki JS
    },
  },
});
