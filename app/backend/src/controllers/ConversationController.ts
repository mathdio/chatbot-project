import { NextFunction, Request, Response } from "express";
import ConversationService from "../services/ConversationService";
import fs from 'fs/promises'

async function create(req: Request, res: Response, next: NextFunction) {
  const { csvContent, id, date } = req.body
  const conversationService = new ConversationService();

  try {
    const conversations = await conversationService.findAll();
    let fileName;
    if (conversations) {
      fileName = `../frontend/public/data/conversation-id-${conversations.length + 1}.csv`
      await fs.writeFile(fileName, csvContent);
      const conversation = {
        user_id: id,
        date,
        url: fileName,
      }

      await conversationService.create(conversation);
      return res.status(201).json();
    }
  } catch (err) {
    next(err)
  }
}

async function findById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const conversationService = new ConversationService();

  try {
    const conversations = await conversationService.findById(id)
    return res.status(200).json(conversations)
  } catch (err) {
    next(err)
  }
}

async function deleteById(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const conversationService = new ConversationService();

  try {
    await conversationService.deleteById(id);
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
}

export { create, findById, deleteById }