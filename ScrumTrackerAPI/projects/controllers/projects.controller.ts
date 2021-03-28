import express from "express";
import projectsService from "../services/projects.service";

class ProjectsController {

    async listProjects(req: express.Request, res: express.Response) {
        const projects = await projectsService.list(100, 0);
        res.status(200).send(projects);
    }
}

export default new ProjectsController();