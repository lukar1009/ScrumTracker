import express from 'express';
import { MessageDto } from '../dto/message.dto';

import messagesService from '../services/messages.service';


class MessagesController {
    async getAllConversationsForUser(req: express.Request, res: express.Response) {
        const conversations = await messagesService.getAllConversationsForUser(+req.params.initiatingUserId);
        res.status(200).send(conversations);
    }

    async getAllMessagesForConversation(req: express.Request, res: express.Response) {
        const messages = await messagesService.getAllMessagesForConversation(+req.params.userId, +req.params.otherUserId);
        res.status(200).send(messages);
    }

    async sendMessage(req: express.Request, res: express.Response) {
        const data = await messagesService.sendMessage(req.body as MessageDto);
        res.status(200).send(data);
    }

    async changeMessageStatus(req: express.Request, res: express.Response) {
        const result = await messagesService.changeMessageStatus(+req.params.messageId, req.params.status);
        return res.status(200).send(result);
    }

    async deleteConversation(req: express.Request, res: express.Response) {
        const result = await messagesService.deleteConversation(+req.params.initiatingUserId, +req.params.otherUserId);
        return res.status(200).send(result);
    }

    async deleteMessage(req: express.Request, res: express.Response) {
        const result = await messagesService.deleteMessage(+req.params.messageId, +req.params.initiatingUserId);
        return res.status(200).send(result);
    }

    async checkForNewMessages(req: express.Request, res: express.Response) {
        const result = await messagesService.checkForNewMessages(+req.params.initiatingUserId);
        return res.status(200).send(result);
    }
}

export default new MessagesController();