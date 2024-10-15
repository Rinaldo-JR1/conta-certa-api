import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";

export class UserController {
  public async getMyUser(req: Request, res: Response, next: NextFunction) {
    res.status(200).json(await userService.getMyUser());
    return;
  }
}
