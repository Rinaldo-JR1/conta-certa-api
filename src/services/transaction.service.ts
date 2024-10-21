import { PrismaClient } from "@prisma/client";
import { addMonths, format } from "date-fns";
import { userService } from "./user.service";
import { TransactionType } from "../shared/types/TransactionType";
export class TransactionService {
  private static prisma = new PrismaClient();

  public static async getTransactions(userId: string) {
    try {
      return await this.prisma.transaction.findMany({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error getting transactions");
    }
  }

  public static async getTransactionByMonth(monthRef: string, userId: string) {
    try {
      return await this.prisma.transaction.findMany({
        where: {
          monthRef,
          userId,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error getting transactions");
    }
  }

  public static async getTransactionById(id: string, userId: string) {
    try {
      return await this.prisma.transaction.findUnique({
        where: { id, userId },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error getting transaction");
    }
  }

  public static async createTransaction(userId: string, parcels: number, amount: number, type: TransactionType, title: string, startDate: Date) {
    try {
      for (let i = 0; i < parcels; i++) {
        const monthRef = format(addMonths(startDate, i), "yyyy-MM");
        await this.prisma.transaction.create({
          data: {
            title,
            amount: amount / parcels,
            monthRef: monthRef,
            type,
            parcel: i + 1,
            userId: userId,
          },
        });
        await userService.updateBalance(userId, type, amount / parcels);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error creating transaction");
    }
  }
}
