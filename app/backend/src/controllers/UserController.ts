import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

async function create(req: Request, res: Response, next: NextFunction) {
  const { user } = req.body;
  const userService = new UserService();

  try {
    await userService.create(user);
    return res.status(201).end();
  } catch (err) {
    next(err)
  }
}

async function find(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;
  const userService = new UserService();

  try {
    const user = await userService.find(id)
    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export { create, find }