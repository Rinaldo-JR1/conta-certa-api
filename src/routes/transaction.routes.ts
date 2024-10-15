import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";

const transactionRoutes = Router();
const transactionController = new TransactionController();
transactionRoutes.get("/my-transaction/:monthRef", transactionController.getMyTransactions);

export { transactionRoutes };
