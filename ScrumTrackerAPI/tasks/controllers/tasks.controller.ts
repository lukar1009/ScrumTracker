import express from 'express';
import tasksMiddleware from '../middleware/tasks.middleware';
import tasksService from '../services/tasks.service';

class TasksController {
    
    async createTask(req: express.Request, res: express.Response) {
        const task = await tasksService.create(req.body);
        res.status(200).send(task);
    }

    async listTasks(req: express.Request, res: express.Response) {
        const tasks = await tasksService.list(100, 0);
        res.status(200).send(tasks);
    }

    async listTasksByUser(req: express.Request, res: express.Response) {
        const tasks = await tasksService.listByUser(+req.params.userId);
        res.status(200).send(tasks);
    }
    
    async listTaskStatuses(req: express.Request, res: express.Response) {
        const statuses = await tasksService.listTaskStatuses();
        res.status(200).send(statuses);
    }
}

export default new TasksController();