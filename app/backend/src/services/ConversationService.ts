import IConversation from "../interfaces/IConversation";
import ConversationModel from "../models/ConversationModel";

class ConversationService {
  protected model: ConversationModel;

  constructor(model: ConversationModel = new ConversationModel()) {
    this.model = model
  }

  async create(conversation: IConversation): Promise<void> {
    await this.model.create(conversation);
  }
  
  async findAll(): Promise<IConversation[] | null> {
    const conversations = await this.model.findAll();
    return conversations 
  }
}

export default ConversationService;