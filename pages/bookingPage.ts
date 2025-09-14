import { Page, Locator } from '@playwright/test';

export class BookingPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('input[name="firstname"]');
    this.lastName = page.locator('input[name="lastname"]');
    this.email = page.locator('input[name="email"]');
    this.phone = page.locator('input[name="phone"]');
    this.submitBtn = page.locator('button:has-text("Reserve Now")');
  }

  async fillBookingForm(first: string, last: string, email: string, phone: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.email.fill(email);
    await this.phone.fill(phone);
  }

  async submit() {
    await this.submitBtn.click();
  }
}
