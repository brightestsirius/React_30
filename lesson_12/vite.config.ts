import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Важливо для тестування React-компонентів
    globals: true, // Дозволяє використовувати expect, describe, it без імпорту
    setupFiles: './src/setupTests.ts', // Файл для додаткових налаштувань (наприклад, розширення expect)
  },
});