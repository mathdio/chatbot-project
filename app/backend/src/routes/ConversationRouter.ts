import { Router } from "express";
import { create } from "../controllers/ConversationController";


const conversationRouter = Router();

conversationRouter.post('/', create);

export default conversationRouter;