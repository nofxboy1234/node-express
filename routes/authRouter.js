import { Router } from "express";
import authController from "../controllers/authController.js";
const authRouter = Router();

authRouter.get("/", authController.index);

export default authRouter;
