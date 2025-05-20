// routes/usersRouter.js
import { Router } from "express";
import usersController from "../controllers/usersController.js";
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/create", usersController.usersCreateGet);
usersRouter.post("/create", usersController.usersCreatePost);

console.log("usersController: ", usersController);

export default usersRouter;
