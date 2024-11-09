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
  public static async createUser(name: string, login: string, password: string) {
    try {
      await this.prisma.user.create({
        data: {
          name,
          login,
          password,
          balance: 0,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error creating user");
    }
  }
}
