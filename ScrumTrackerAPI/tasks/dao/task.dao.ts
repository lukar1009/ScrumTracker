import { TaskDto } from '../dto/task.dto';
import { connect } from '../../config/database';
import { TaskStatusDto } from '../dto/task-status.dto';

class TaskDao {

    constructor() { }

    async addTask(task: TaskDto) {
        const conn = await connect();
        await conn.execute('insert into task set Title = ?, Description = ?, EstimatedTime = ?, TimeSpent = 0, TaskStatusId = ?', [task.title, task.description, task.estimatedTime, task.taskStatus != undefined ? task.taskStatus.id : 1]);
        return task;
    }

    async listTasks(limit: number, pageNum: number) {
        const conn = await connect();
        const result = await conn.query('select t.ID as TaskID, t.Title, t.Description, t.EstimatedTime, t.TimeSpent, ts.ID as TaskStatusID, ts.Name as TaskStatusName ' + 
                                        'from task t inner join task_status ts on t.TaskStatusId = ts.ID');
        let res = this.mapTasks(result[0]);
        return res;
    }

    async getAllTaskStatuses() {
        const conn = await connect();
        const result = await conn.query('select * from task_status');
        let res = this.mapTaskStatuses(result[0]);
        return res;
    }

    private mapTasks(tasksData: any) {
        let tasksArray: TaskDto[] = [];
        for(let i = 0; i < tasksData.length; i++) {
            tasksArray.push(this.populateTask(tasksData[i]));
        }
        return tasksArray;
    }

    private populateTask(data: any) {
        let task = new TaskDto();
        task.id = +data["TaskID"];
        task.title = data["Title"];
        task.description = data["Description"];
        task.estimatedTime = data["EstimatedTime"];
        task.timeSpent = data["TimeSpent"];
        task.taskStatus = new TaskStatusDto();
        task.taskStatus.id = data["TaskStatusID"];
        task.taskStatus.name = data["TaskStatusName"];
        return task;
    }

    private mapTaskStatuses(taskStatusesData: any) {
        let tsArray: TaskStatusDto[] = [];
        for(let i = 0; i < taskStatusesData.length; i++) {
            tsArray.push(this.populateTaskStatus(taskStatusesData[i]));
        }
        return tsArray;
    }

    private populateTaskStatus(data: any) {
        let status = new TaskStatusDto();
        status.id = +data["ID"];
        status.name = data["Name"];
        return status;
    }

}

export default new TaskDao();