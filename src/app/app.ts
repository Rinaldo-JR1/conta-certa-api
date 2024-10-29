import express, { NextFunction, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { userRoutes } from "../routes/user.routes";
import { transactionRoutes } from "../routes/transaction.routes";
import cookieParser from "cookie-parser";
import { authRoutes } from "../routes/auth.routes";
class App {
  private app: express.Application;
  private port: number;
  private baseUrl = "/conta-certa-api";

  constructor(port: number) {
    this.app = express();
    this.port = port;
    const corsOptions: CorsOptions = {
      origin: ["http://localhost:4052"],
    };
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`Ip: ${req.ip} || Request: ${req.method} ${req.path}`);
      next();
    });
    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        console.log("error middleware");
        res.sendStatus(500);
      }
    );

    this.app.use(`${this.baseUrl}/users`, userRoutes);
    this.app.use(`${this.baseUrl}/transactions`, transactionRoutes);
    this.app.use(`${this.baseUrl}/auth`, authRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export { App };
