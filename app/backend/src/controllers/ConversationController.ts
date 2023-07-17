import { NextFunction, Request, Response } from "express";
import ConversationService from "../services/ConversationService";
import fs from 'fs/promises'

async function create(req: Request, res: Response, next: NextFunction) {
  const { csvContent, id, date } = req.body
  const conversationService = new ConversationService();


  try {
    await fs.writeFile('src/data/file.csv', csvContent);
    return res.status(200).end;
  } catch (err) {
    console.log(err);
  }
  
}

export { create }