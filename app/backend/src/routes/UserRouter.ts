import { Router } from "express";
import { find } from "../controllers/UserController";

const userRouter = Router();

userRouter.get('/', find);

export default userRouter;