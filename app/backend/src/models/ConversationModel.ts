import conn from "../database/Connection";
import IConversation from "../interfaces/IConversation";

class ConversationModel {
  constructor(private connection = conn) {}

  async create(conversation: IConversation): Promise<void> {
    await this.connection.execute(
      `INSERT INTO chatbot.Conversations (user_id, url, date)
      VALUES (?, ?, ?);`,
      [conversation.user_id, conversation.url, conversation.date]);
  }
}

export default ConversationModel;