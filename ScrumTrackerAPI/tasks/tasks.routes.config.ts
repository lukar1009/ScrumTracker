import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";

export class TasksRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TasksRoutes');
    }
    
    
    configureRoutes(): express.Application {
        return this.app;
    }
}