import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import tasksController from "./controllers/tasks.controller";
import tasksMiddleware from "./middleware/tasks.middleware";

export class TasksRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TasksRoutes');
    }
    
    
    configureRoutes(): express.Application {
        
        this.app.route('/tasks')
                .get(tasksController.listTasks)
                .post(tasksMiddleware.validateRequiredTaskBodyFields,
                      tasksController.createTask)
        
        this.app.route('/tasks/statuses')
                .get(tasksController.listTaskStatuses);
    
        return this.app;
    }
}