import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";

export class UserController {
  public async getMyUser(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.body;
    if (!userId) {
      res.status(400).json({ message: "Dados invalidos" });
      return;
    }
    const user = await userService.getMyUser(userId);
    res.status(200).json({ user: user });
  }
  public async createUser(req: Request, res: Response, next: NextFunction) {
    const { name, login, password } = req.body;
    if (!name || !login || !password) {
      res.status(400).json({ message: "Dados invalidos" });
      return;
    }
    await userService.createUser(name, login, password);
    res.status(201).json({ message: "Usuario criado com sucesso" });
  }
}
