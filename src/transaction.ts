import { CryptoMMOClient } from './client';
import { Transaction, CreateTransactionParams, TransactionListParams } from './types';

export class TransactionAPI extends CryptoMMOClient {
  async createTransaction(params: CreateTransactionParams): Promise<Transaction> {
    return this.post<Transaction>('/api/transactions', params);
  }

  async getTransactionList(params?: TransactionListParams): Promise<Transaction[]> {
    return this.get<Transaction[]>('/api/transactions', params);
  }

  async getTransactionDetail(id: string): Promise<Transaction> {
    return this.get<Transaction>(`/api/transactions/${id}`);
  }
}