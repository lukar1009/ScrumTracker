import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";

export class NotificationsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'NotificationsRoutes');
    }
    
    
    configureRoutes(): express.Application {
        return this.app;
    }
}