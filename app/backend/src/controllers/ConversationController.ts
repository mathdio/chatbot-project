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
      fileName = `src/data/conversation-id-${conversations.length}.csv`
      await fs.writeFile(fileName, csvContent);
      const conversation = {
        user_id: id,
        date,
        url: fileName,
      }

      await conversationService.create(conversation);
      return res.status(201).end;
    }

  } catch (err) {
    console.log(err);
  }
  
}

export { create }