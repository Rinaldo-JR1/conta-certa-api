import { Transaction } from "@prisma/client";
import { TransactionType } from "../shared/types/TransactionType";

export const monthCalc = (
  transactions: Transaction[],
  type: TransactionType
) => {
  return transactions
    .filter((transaction) => transaction.type === type)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
};
