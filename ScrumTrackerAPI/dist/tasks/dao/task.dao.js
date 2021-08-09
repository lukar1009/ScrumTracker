"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_dto_1 = require("../dto/task.dto");
const database_1 = require("../../config/database");
const task_status_dto_1 = require("../dto/task-status.dto");
class TaskDao {
    constructor() { }
    addTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('insert into task set Title = ?, Description = ?, EstimatedTime = ?, TimeSpent = 0, TaskStatusId = ?', [task.title, task.description, task.estimatedTime, task.taskStatus != undefined ? task.taskStatus.id : 1]);
            const resID = conn.query("select ID as TaskID from Task order by ID desc limit 1").then(data => {
                let res = this.mapTasks(data[0]);
                let id = res[0].id != undefined ? res[0].id : 0;
                conn.execute('insert into user_x_role_x_task set UserId = ?, RoleId = 4, TaskId = ?', [task.assignedDeveloperId, id]);
                conn.execute('insert into user_x_role_x_task set UserId = ?, RoleId = 1, TaskId = ?', [task.scrumMasterId, id]);
                return task;
            });
        });
    }
    //TODO: Osposobiti vracanja assignedUser i scrumMaster atributa
    listTasks(limit, pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query('select t.ID as TaskID, t.Title, t.Description, t.EstimatedTime, t.TimeSpent, ts.ID as TaskStatusID, ts.Name as TaskStatusName ' +
                'from task t inner join task_status ts on t.TaskStatusId = ts.ID');
            let res = this.mapTasks(result[0]);
            return res;
        });
    }
    listTasksByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query('select * ' +
                'from task t inner join task_status ts on t.TaskStatusId = ts.ID ' +
                'inner join user_x_role_x_task urt on t.ID = urt.ID ' +
                `where urt.UserId = ${userId}`);
            return result[0];
        });
    }
    getAllTaskStatuses() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query('select * from task_status');
            let res = this.mapTaskStatuses(result[0]);
            return res;
        });
    }
    mapTasks(tasksData) {
        let tasksArray = [];
        for (let i = 0; i < tasksData.length; i++) {
            tasksArray.push(this.populateTask(tasksData[i]));
        }
        return tasksArray;
    }
    populateTask(data) {
        let task = new task_dto_1.TaskDto();
        task.id = +data["TaskID"];
        task.title = data["Title"];
        task.description = data["Description"];
        task.estimatedTime = data["EstimatedTime"];
        task.timeSpent = data["TimeSpent"];
        task.taskStatus = new task_status_dto_1.TaskStatusDto();
        task.taskStatus.id = data["TaskStatusID"];
        task.taskStatus.name = data["TaskStatusName"];
        return task;
    }
    mapTaskStatuses(taskStatusesData) {
        let tsArray = [];
        for (let i = 0; i < taskStatusesData.length; i++) {
            tsArray.push(this.populateTaskStatus(taskStatusesData[i]));
        }
        return tsArray;
    }
    populateTaskStatus(data) {
        let status = new task_status_dto_1.TaskStatusDto();
        status.id = +data["ID"];
        status.name = data["Name"];
        return status;
    }
}
exports.default = new TaskDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90YXNrcy9kYW8vdGFzay5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMEM7QUFDMUMsb0RBQWdEO0FBQ2hELDREQUF1RDtBQUV2RCxNQUFNLE9BQU87SUFFVCxnQkFBZ0IsQ0FBQztJQUVYLE9BQU8sQ0FBQyxJQUFhOztZQUN2QixNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMscUdBQXFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDck8sTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1RUFBdUUsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0SCxJQUFJLENBQUMsT0FBTyxDQUFDLHVFQUF1RSxFQUFFLENBQUMsSUFBSSxDQUFDLGFB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