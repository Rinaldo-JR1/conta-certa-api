/**
 *
 * @title Transaction
 * @description Represents a transaction
 * @type object
 * @property {string} title - The title of the transaction
 * @property {number} value - The value of the transaction
 * @property {TransactionType} type - The type of the transaction
 * @property {string} monthRef - The month reference of the transaction (format: YYYY-MM)
 */
export interface Transaction {
  id: number;
  title: string;
  value: number;
  type: TransactionType;
  monthRef: string;
}

export type TransactionType = "I" | "O";
