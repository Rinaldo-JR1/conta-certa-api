import { PrismaClient } from "@prisma/client";

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
}
