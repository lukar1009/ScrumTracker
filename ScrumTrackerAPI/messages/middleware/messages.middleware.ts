import express from 'express';
import messagesService from '../services/messages.service';

class MessagesMiddleware {
    
    async extractUserIdParam(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.userId = req.params.userId;
        next();
    }

    async extractOtherUserIdParam(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.otherUserId = req.params.otherUserId;
        next();
    }

    async extractInitiatingUserIdParam(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.initiatingUserId = req.params.initiatingUserId;
        next();
    }

    async extractMessageIdParam(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.messageId = req.params.messageId;
        next();
    }

    async extractStatusParam(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.status = req.params.status;
        next();
    }
}

export default new MessagesMiddleware();