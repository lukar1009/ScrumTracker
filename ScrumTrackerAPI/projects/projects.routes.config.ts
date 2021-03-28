import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import projectsController from "./controllers/projects.controller";

export class ProjectsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProjectsRoutes');
    }
    
    
    configureRoutes(): express.Application {
        this.app.route('/projects')
                .get(projectsController.listProjects);

        return this.app;
    }
}