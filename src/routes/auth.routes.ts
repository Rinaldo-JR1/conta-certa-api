import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { VerifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

const authRoutes = Router();
const authController = new AuthController();
authRoutes.post("/login", authController.login);
authRoutes.post(
  "/checkJwt",
  VerifyTokenMiddleware.verifyToken,
  authController.checkJwt
);

export { authRoutes };
