import { CRUD } from "../../common/interfaces/crud.interface";
import TaskDao from '../dao/task.dao';

class TasksService implements CRUD {

    async list(limit: number, page: number) {
        return TaskDao.listTasks(limit, page);
    }

    async create(resource: any) {
        return TaskDao.addTask(resource);
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

    async listTaskStatuses() {
        return TaskDao.getAllTaskStatuses();
    }
}

export default new TasksService();