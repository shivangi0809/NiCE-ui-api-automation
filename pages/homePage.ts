import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly bookingTab: Locator;
  readonly bookNowBtn: Locator;
  readonly reserveNowBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookingTab = page.locator('li.nav-item > a.nav-link[href="/#rooms"]');
    this.bookNowBtn = page.locator('.room-card .card-footer a.btn.btn-primary').last();
    this.reserveNowBtn = page.locator('#doReservation');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickbookingTab() {
    await this.bookingTab.click();
  }

  async clickbookNowBtn() {
    await this.bookNowBtn.click();
  }

  async clickreserveNowBtn() {
    await this.reserveNowBtn.click();
  }
}
