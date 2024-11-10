import { NextFunction, Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";
import { monthCalc } from "../utils/monthCalc";

export class TransactionController {
  public async getMyTransactions(req: Request, res: Response, next: NextFunction) {
    const { monthRef } = req.params;
    const { userId } = req.body;
    if (!monthRef) {
      res.status(400).json({ message: "Nao foi informado um mes" });
      return;
    }
    const netAmount = await TransactionService.getNetAmount(userId, monthRef);
    const transactions = await TransactionService.getTransactionByMonth(monthRef, userId);
    const incoming = monthCalc(transactions, "I");
    const output = monthCalc(transactions, "O");
    res.status(200).json({
      transactions,
      incoming,
      output,
      netAmount: netAmount || 0,
    });
    return;
  }
  public async createTransaction(req: Request, res: Response, next: NextFunction) {
    const { parcels, amount, type, startDate, userId, title } = req.body;
    if (!parcels || !amount || !type || !startDate || !userId || !title) {
      res.status(400).json({ message: "Dados invalidos" });
      return;
    }
    await TransactionService.createTransaction(userId, parcels, amount, type, title, startDate);
    res.status(201).json({ message: "Transação criada com sucesso" });
  }
  public async deleteTransaction(req: Request, res: Response, next: NextFunction) {
    const { transactionId, userId } = req.body;
    if (!transactionId || !userId) {
      res.status(404).json({ message: "Dados invalidos" });
      return;
    }
    const amount = await TransactionService.deleteTransaction(transactionId, userId);
    if (amount === 0) {
      res.status(404).json({ message: "Não foi encontrada nenhuma transação" });
      return;
    }
    res.status(200).json({ message: "Transação deletada com sucesso" });
  }
}
