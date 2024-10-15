import { transactions } from "../db";
import { Transaction } from "../shared/types/Transaction";

export class TransactionService {
  public static async getTransactions() {
    return transactions;
  }
  public static async getTransactionByMonth(monthRef: string) {
    return transactions.filter((transaction) => transaction.monthRef === monthRef);
  }
  public static async getTransactionById(id: number) {
    return transactions.find((transaction) => transaction.id === id);
  }
  public static async createTransaction(transaction: Transaction) {
    await transactions.push(transaction);
    return transaction;
  }
}
