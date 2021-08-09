import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import messagesController from "./controllers/messages.controller";
import MessagesMiddleware from "./middleware/messages.middleware";

export class MessagesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MessagesRoutes');
    }
    
    configureRoutes(): express.Application {
        this.app.param(`initiatingUserId`, MessagesMiddleware.extractInitiatingUserIdParam);
        this.app.route('/messages/getAllConversations/:initiatingUserId')
            .get(messagesController.getAllConversationsForUser)
        
        this.app.param(`userId`, MessagesMiddleware.extractUserIdParam);
        this.app.param(`otherUserId`, MessagesMiddleware.extractOtherUserIdParam);
        this.app.route('/messages/getAllMessagesForConversation/:userId/:otherUserId')
            .get(messagesController.getAllMessagesForConversation)
        
        this.app.route('/messages/sendMessage')
            .post(messagesController.sendMessage);
        
        this.app.param(`messageId`, MessagesMiddleware.extractMessageIdParam);
        this.app.param(`otherUserId`, MessagesMiddleware.extractOtherUserIdParam);
        this.app.param(`status`, MessagesMiddleware.extractStatusParam);
        this.app.route('/messages/changeMessageStatus/:messageId/:otherUserId/:status')
            .put(messagesController.changeMessageStatus)

        this.app.param(`initiatingUserId`, MessagesMiddleware.extractInitiatingUserIdParam);
        this.app.param(`otherUserId`, MessagesMiddleware.extractOtherUserIdParam);         
        this.app.route('/messages/deleteConversation/:initiatingUserId/:otherUserId')
            .delete(messagesController.deleteConversation)

        this.app.param(`messageId`, MessagesMiddleware.extractMessageIdParam);
        this.app.param(`initiatingUserId`, MessagesMiddleware.extractInitiatingUserIdParam);
        this.app.route('/messages/deleteMessage/:messageId/:initiatingUserId')
            .delete(messagesController.deleteMessage)

        this.app.param(`initiatingUserId`, MessagesMiddleware.extractInitiatingUserIdParam);        
        this.app.route('/messages/checkForNewMessages/:initiatingUserId')
            .get(messagesController.checkForNewMessages)

        return this.app;
    }
}