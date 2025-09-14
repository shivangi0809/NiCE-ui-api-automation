import base from './playwright.config.js';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  ...base,
  testDir: './tests/ui',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});
