import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
  requestContext: APIRequestContext;

  static async create(): Promise<ApiClient> {
    const requestContext = await request.newContext({
      baseURL: 'https://automationintesting.online',
      extraHTTPHeaders: { 'Content-Type': 'application/json' },
    });
    return new ApiClient(requestContext);
  }

  private constructor(requestContext: APIRequestContext) {
    this.requestContext = requestContext;
  }

  async createBooking(data: any) {
    return await this.requestContext.post('api/booking', { data });
  }

  async getBookings() {
    return await this.requestContext.get('/booking');
  }

  async getRoomBookings() {
    return await this.requestContext.get('api/room');
  }
}
