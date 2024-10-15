import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";

const transactionRoutes = Router();
const transactionController = new TransactionController();
transactionRoutes.get(
  "/my-transaction/:monthRef",
  transactionController.getMyTransactions
);
transactionRoutes.post("/new", transactionController.createTransaction);

export { transactionRoutes };
