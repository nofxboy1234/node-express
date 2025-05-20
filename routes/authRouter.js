import { Router } from "express";
import authController from "../controllers/authController.js";
const authRouter = Router();

authRouter.get("/", authController.index);
authRouter.get("/sign-up", authController.newUser);
authRouter.post("/sign-up", authController.create);

export default authRouter;
