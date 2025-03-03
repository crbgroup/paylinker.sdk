import { CryptoMMOClient } from './client';
import { PaymentMethod, MerchantInfo } from './types';

export class MerchantAPI extends CryptoMMOClient {
  async getMerchantPaymentMethods(): Promise<PaymentMethod[]> {
    return this.get<PaymentMethod[]>('/api/merchants/payment-methods');
  }

  async getMerchantInfo(): Promise<MerchantInfo> {
    return this.get<MerchantInfo>('/api/merchants/info');
  }
}
