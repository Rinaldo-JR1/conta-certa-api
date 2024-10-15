import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { TokenService } from "../services/token.service";

export class AuthController {
  public async login(req: Request, res: Response, next: NextFunction) {
    const { login, password } = req.body;
    if (!login || !password) {
      res.status(400).json({ message: "Dados invalidos" });
      return;
    }

    const data = await AuthService.login(login, password);
    if (data.error || !data.id) {
      res.status(401).json({ message: "Usuario ou senha invalidos" });
      return;
    }

    res.cookie("token", TokenService.generateToken(data.id), {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      maxAge: 3600000 * 6,
    });

    res.status(200).json({ message: "Usuario logado com sucesso" });
  }
}
