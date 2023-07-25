import { Router } from "express";
import { create, findById, deleteById, findOne } from "../controllers/ConversationController";


const conversationRouter = Router();

conversationRouter.post('/', create);
conversationRouter.get('/:id', findById);
conversationRouter.delete('/:id', deleteById);
conversationRouter.get('/get/:id', findOne);

export default conversationRouter;