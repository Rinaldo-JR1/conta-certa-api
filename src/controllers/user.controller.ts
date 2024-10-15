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
}
