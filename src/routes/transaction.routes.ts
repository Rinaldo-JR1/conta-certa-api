import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
import { VerifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

const transactionRoutes = Router();
const transactionController = new TransactionController();
transactionRoutes.get("/my-transaction/:monthRef", VerifyTokenMiddleware.verifyToken, transactionController.getMyTransactions);
transactionRoutes.post("/new", VerifyTokenMiddleware.verifyToken, transactionController.createTransaction);
transactionRoutes.delete("/delete", VerifyTokenMiddleware.verifyToken, transactionController.deleteTransaction);

export { transactionRoutes };
