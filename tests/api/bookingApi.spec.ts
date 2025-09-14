import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient.js';
// const requestbody = require ('../../test-data/bookroom.json');

// debug purpose only
test('Check API root', async () => {
  const api = await ApiClient.create();
  const res = await api.requestContext.get('/');
  // console.log('Root status:', res.status());
  // console.log('Root body:', await res.text());
});


test('Create booking via API', async () => {
  const api = await ApiClient.create();

  const response = await api.createBooking({
    // bookingdates: { checkin: '2025-01-1', checkout: '2025-01-05' },
    // depositpaid: true,
    // firstname: 'Jane',
    // lastname: 'Smith',
    // email: 'jane.smith@test.com',
    // phone: '9876543210',


    "roomid": 3,
    "firstname": "1",
    "lastname": "n",
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2025-09-13",
        "checkout": "2025-09-14"
    },
    "email": "test@test.com",
    "phone": "12345678901"
  });

  console.log('Status:', response.status());
  console.log('Response:', await response.text());
  
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.bookingid).toBeDefined();
});

test('Get bookings via API', async () => {
  const api = await ApiClient.create();

  const response = await api.getBookings();
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(Array.isArray(body.bookings)).toBe(true);
});

test('Get room details via API', async () => {
  const api = await ApiClient.create();

  const response = await api.getRoomBookings();
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  console.log(body)
  expect(Array.isArray(body.rooms)).toBe(true);
  expect (body.rooms[0].roomid).toBe(1)
});



