import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot.result';
import { ChatUseCase } from '../useCases/chat-use-case';
export declare class ChatbotController {
    private readonly chatUseCase;
    constructor(chatUseCase: ChatUseCase);
    chat(query: ChatParameters): Promise<ChatbotResult>;
}
