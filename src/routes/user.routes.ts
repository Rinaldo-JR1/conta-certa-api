import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { VerifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

const userRoutes = Router();
const userController = new UserController();

userRoutes.get(
  "/me",
  VerifyTokenMiddleware.verifyToken,
  userController.getMyUser
);

export { userRoutes };
