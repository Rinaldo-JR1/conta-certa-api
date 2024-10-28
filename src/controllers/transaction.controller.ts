import { NextFunction, Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";
import { monthCalc } from "../utils/monthCalc";

export class TransactionController {
  public async getMyTransactions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { monthRef } = req.params;
    const { userId } = req.body;
    if (!monthRef) {
      res.status(400).json({ message: "Nao foi informado um mes" });
      return;
    }
    const transactions = await TransactionService.getTransactionByMonth(
      monthRef,
      userId
    );
    if (!transactions || transactions.length === 0) {
      res.status(404).json({ message: "Nenhuma transacao encontrada" });
      return;
    }

    const incoming = monthCalc(transactions, "I");
    const output = monthCalc(transactions, "O");

    res.status(200).json({ transactions, incoming, output });
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
