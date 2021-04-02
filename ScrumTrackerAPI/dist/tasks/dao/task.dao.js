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