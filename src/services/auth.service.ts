import { PrismaClient } from "@prisma/client";
import e from "express";

export class AuthService {
  private static prisma = new PrismaClient();
  public static async login(login: string, password: string) {
    const data = await this.prisma.user.findUnique({
      where: {
        login,
        password,
      },
    });
    if (data) {
      return { error: false, id: data.id };
    } else {
      return { error: true };
    }
  }
}
