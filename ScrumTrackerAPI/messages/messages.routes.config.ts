import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";

export class MessagesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MessagesRoutes');
    }
    
    
    configureRoutes(): express.Application {
        return this.app;
    }
}