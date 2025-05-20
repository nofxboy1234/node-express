import { Router } from "express";
import usernamesController from "../controllers/usernamesController.js";
const usernamesRouter = Router();

usernamesRouter.get("/", usernamesController.usernamesListGet);
usernamesRouter.get("/new", usernamesController.usernamesCreateGet);
usernamesRouter.post("/new", usernamesController.usernamesCreatePost);

export default usernamesRouter;
