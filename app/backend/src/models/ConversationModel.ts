import conn from "../database/Connection";
import IConversation from "../interfaces/IConversation";
import { RowDataPacket } from 'mysql2';

class ConversationModel {
  constructor(private connection = conn) {}

  async create(conversation: IConversation): Promise<void> {
    await this.connection.execute(
      `INSERT INTO chatbot.Conversations (user_id, url, date)
      VALUES (?, ?, ?);`,
      [conversation.user_id, conversation.url, conversation.date]);
  }

  async findAll(): Promise<IConversation[] | null> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM chatbot.Conversations');
    return result as IConversation[]
  }

  async findById(id: number): Promise<IConversation[] | null> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      `SELECT url, date FROM chatbot.Conversations
      WHERE user_id = ?
      ORDER BY date ASC`,
      [id]);
    return result as IConversation[];
  }

  async deleteById(id: number): Promise<void> {
    await this.connection.execute(
      `DELETE FROM chatbot.Conversations
      WHERE id = ?`,
      [id]);
  }
}

export default ConversationModel;