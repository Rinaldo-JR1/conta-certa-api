import { PrismaClient } from "@prisma/client";
import { TransactionType } from "../shared/types/TransactionType";

export class userService {
  private static prisma = new PrismaClient();
  public static async getMyUser(userId: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          balance: true,
          name: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error getting user");
    }
  }
  public static async updateBalance(userId: string, type: TransactionType, value: number) {
    try {
      return await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          balance: {
            [type === "I" ? "increment" : "decrement"]: value,
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error updating balance");
    }
  }
}
