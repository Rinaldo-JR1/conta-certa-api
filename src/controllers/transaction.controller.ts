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
    const { parcels, amount, type, startDate } = req.body;
    if (!parcels || !amount || !type || !startDate) {
      res.status(400).json({ message: "Dados invalidos" });
      return;
    }
    await TransactionService.createTransaction(
      "3aa2f89d-a648-445c-a066-4a562b39e3b6",
      parcels,
      amount,
      type,
      new Date()
    );
    res.status(201).json({ message: "Transacao criada com sucesso" });
  }
}
