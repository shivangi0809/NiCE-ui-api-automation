import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    baseURL: 'https://automationintesting.online',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});
