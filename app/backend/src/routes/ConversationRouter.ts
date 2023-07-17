import { Router } from "express";
import { create, findById, deleteById } from "../controllers/ConversationController";


const conversationRouter = Router();

conversationRouter.post('/', create);
conversationRouter.get('/:id', findById);
conversationRouter.delete('/:id', deleteById);

export default conversationRouter;