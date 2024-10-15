import { NextFunction, Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

export class TransactionController {
  public async getMyTransactions(req: Request, res: Response, next: NextFunction) {
    const { monthRef } = req.params;
    if (!monthRef) {
      res.status(400).json({ message: "Nao foi informado um mes" });
      return;
    }
    const transactions = await TransactionService.getTransactionByMonth(monthRef);
    res.status(200).json({ transactions: transactions });
    return;
  }
}
