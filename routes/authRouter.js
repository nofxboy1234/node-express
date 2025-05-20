import { Router } from "express";
import authController from "../controllers/authController.js";
import passport from "../auth/passport.js";
const authRouter = Router();

authRouter.get("/", authController.index);
authRouter.get("/sign-up", authController.newUser);
authRouter.post("/sign-up", authController.create);
authRouter.get("/log-in", authController.login);
authRouter.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/auth",
    failureRedirect: "/auth/log-in",
  })
);
authRouter.get("/log-out", authController.logout);

export default authRouter;
