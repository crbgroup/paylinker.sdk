import axios, { AxiosInstance } from 'axios';

export class CryptoMMOClient {
  private client: AxiosInstance;

  constructor(apiKey: string) {
    const baseURL = 'https://paylinker-api.crbgroup.live/';

    this.client = axios.create({
      baseURL,
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  protected async get<T>(path: string, params?: any): Promise<T> {
    const response = await this.client.get(path, { params });
    return response.data;
  }

  protected async post<T>(path: string, data: any): Promise<T> {
    const response = await this.client.post(path, data);
    return response.data;
  }
}