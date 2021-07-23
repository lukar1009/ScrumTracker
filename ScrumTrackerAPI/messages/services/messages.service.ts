import MessageDao from "../dao/message.dao";
import { MessageDto } from "../dto/message.dto";

class MessagesService {

    async getAllConversationsForUser(initiatingUserId: number) {
        return MessageDao.getAllConversationsForUser(initiatingUserId);
    }

    async getAllMessagesForConversation(userId: number, otherUserId: number) {
        return MessageDao.getAllMessagesForConversation(userId, otherUserId);
    }

    async sendMessage(message: MessageDto) {
        return MessageDao.sendMessage(message);
    }

    async changeMessageStatus(messageId: number, status: string) {
        return MessageDao.changeMessageStatus(messageId, status);
    }

    async deleteConversation(initiatingUserId: number, otherUserId: number) {
        return MessageDao.deleteConversation(initiatingUserId, otherUserId);
    }

    async deleteMessage(messageId: number, initiatingUserId: number) {
        return MessageDao.deleteMessage(messageId, initiatingUserId);
    }

    async checkForNewMessages(initiatingUserId: number) {
        return MessageDao.checkForNewMessages(initiatingUserId);
    }

}

export default new MessagesService();