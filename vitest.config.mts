import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    globals: false,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    exclude: ['**/node_modules/**', '**/.docusaurus/**', '**/build/**'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/components/**/*.tsx', 'src/theme/**/*.tsx'],
      exclude: ['src/**/*.test.tsx', 'src/**/*.module.css'],
    },
  },
});
