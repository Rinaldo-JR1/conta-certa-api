import { NextFunction, Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

export class TransactionController {
  public async getMyTransactions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { monthRef } = req.params;
    if (!monthRef) {
      res.status(400).json({ message: "Nao foi informado um mes" });
      return;
    }
    const transactions = await TransactionService.getTransactionByMonth(
      monthRef
    );
    res.status(200).json({ transactions: transactions });
    return;
  }
  public async createTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { parcels, amount, type, startDate, userId, title } = req.body;
    if (!parcels || !amount || !type || !startDate || !userId || !title) {
      res.status(400).json({ message: "Dados invalidos" });
      return;
    }
    await TransactionService.createTransaction(
      userId,
      parcels,
      amount,
      type,
      title,
      new Date()
    );
    res.status(201).json({ message: "Transacao criada com sucesso" });
  }
}
