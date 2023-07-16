import IUser from "../interfaces/IUser";
import UserModel from "../models/UserModel";

class UserService {
  protected model: UserModel

  constructor(model: UserModel = new UserModel()) {
    this.model = model;
  }

  async create(user: IUser): Promise<void> {
    await this.model.create(user)
  }

  async find(id: number): Promise<IUser | null> {
    return this.model.find(id)
  }

  async findByUser(username: string): Promise<IUser | null> {
    return this.model.findByUser(username);
  }
}

export default UserService;