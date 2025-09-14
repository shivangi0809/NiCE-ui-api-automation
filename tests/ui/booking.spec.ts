import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage.js';
import { BookingPage } from '../../pages/bookingPage.js';

test('User can book a room', async ({ page }) => {
  const homePage = new HomePage(page);
  const bookingPage = new BookingPage(page);

  await homePage.goto();
  await homePage.clickbookingTab();
  await homePage.clickbookNowBtn();
  await homePage.clickreserveNowBtn();

  await bookingPage.fillBookingForm('shivangitest1', 'srivastava1', 'shivangi1@test.com', '074247675751');
  await bookingPage.submit();

  // await expect(page.locator('h2', { hasText: 'Booking Confirmed' })).toBeVisible();


  // await expect(page.locator('.alert.alert-success')).toBeVisible();
});

test('Attempt to book a room with invalid data and verify error handling', async ({ page }) => {
  const homePage = new HomePage(page);
  const bookingPage = new BookingPage(page);

  await homePage.goto();
  await homePage.clickbookingTab();
  await homePage.clickbookNowBtn();
  await homePage.clickreserveNowBtn();

  await bookingPage.fillBookingForm('sh', 'sr', 'test', '07424');
  await bookingPage.submit();
  await expect(page.locator('.alert')).toContainText('size must be between 3 and 18');
  await expect(page.locator('.alert')).toContainText('size must be between 3 and 30');
  await expect(page.locator('.alert')).toContainText('size must be between 11 and 21');
  await expect(page.locator('.alert')).toContainText('must be a well-formed email address');



  // await expect(page.locator('h2', { hasText: 'Booking Confirmed' })).toBeVisible();


  // await expect(page.locator('.alert.alert-success')).toBeVisible();
});
  
  