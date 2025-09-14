import base from './playwright.config.js';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  ...base,
  testDir: './tests/api',
  // API tests don't need browsers
  projects: [
    {
      name: 'api',
      use: {},
    },
  ],
});
