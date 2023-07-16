import { Router } from "express";
import { findByUser } from "../controllers/UserController";

const userRouter = Router();

userRouter.post('/fetch-username', findByUser);

export default userRouter;