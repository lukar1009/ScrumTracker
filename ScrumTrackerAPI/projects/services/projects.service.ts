import { CRUD } from "../../common/interfaces/crud.interface";
import projectDao from "../dao/project.dao";

class ProjectsService implements CRUD {
    async list(limit: number, page: number) {
        return projectDao.listProjects(limit, page);
    }

    async create(resource: any) {
        return null;
    }

    async updateById(resourceId: any): Promise<string> {
        return "";
    }

    async readById(resourceId: any) {
        return null;
    }

    async deleteById(resourceId: any): Promise<string> {
        return "";
    }
}

export default new ProjectsService();