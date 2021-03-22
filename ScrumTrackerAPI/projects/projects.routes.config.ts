import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";

export class ProjectsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProjectsRoutes');
    }
    
    
    configureRoutes(): express.Application {
        return this.app;
    }
}