import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    uiBase: '/',
    environment: 'happydom',
  },
});
