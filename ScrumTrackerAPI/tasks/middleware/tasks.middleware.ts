import express from 'express';

class TasksMiddleware {
    async validateRequiredTaskBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.title && req.body.description && req.body.estimatedTime && req.body.taskStatus) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields for new task.`});
        }
    }
}

export default new TasksMiddleware();