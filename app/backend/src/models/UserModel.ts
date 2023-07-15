import conn from '../database/Connection';
import { RowDataPacket } from 'mysql2';
import IUser from '../interfaces/IUser';

export default class UserModel {
	constructor(private connection = conn) {}

	async create(user: IUser): Promise<void> {
		await this.connection.execute(`
    INSERT INTO chatbot.Users (name, username, password)
    VALUES (?, ?, ?);`,
		[user.name, user.username, user.password]);
	}
  
	async list(): Promise<IUser[]> {
		const [result] = await this.connection.execute('SELECT * FROM chatbot.Users');
		return result as IUser[];
	}

	async find(id: number): Promise<IUser | null> {
		const [result] = await this.connection.execute<RowDataPacket[]>(`
    SELECT * FROM chatbot.Users
    WHERE id = ?`,
		[id]);
		return result[0] as IUser;
	}
}