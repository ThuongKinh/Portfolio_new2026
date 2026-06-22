import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base:'/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // Cấu hình chuẩn để chạy local không bị nuốt mất sự kiện thay đổi file
      watch: {
        usePolling: true, 
        interval: 100
      }
    },
  };
});
