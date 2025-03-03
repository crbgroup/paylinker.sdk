export interface Transaction {
  transactionId: string;
  walletId: string;
  merchantId: string;
  paymentMethodId: string;
  orderId: string;
  txHash: string;
  amount: string;
  status: string;
  createdAt: string;
  confirmedAt: string;
  wallet: {
    walletId: string;
    address: string;
  };
  paymentMethod: {
    paymentMethodId: string;
    networkCode: string;
    chainId: number;
    vmType: string;
  };
}

export interface CreateTransactionParams {
  orderId: string;
  amount: string;
  networkCode: string;
}

export interface TransactionListParams {
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  walletId?: string;
  networkCode?: string;
  orderId?: string;
  transactionId?: string;
  transactionHash?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaymentMethod {
  id: string;
  name: string;
  code: string;
  icon: string;
  status: string;
}

export interface MerchantInfo {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}