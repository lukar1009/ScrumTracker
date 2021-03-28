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
            return task;
        });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90YXNrcy9kYW8vdGFzay5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMEM7QUFDMUMsb0RBQWdEO0FBQ2hELDREQUF1RDtBQUV2RCxNQUFNLE9BQU87SUFFVCxnQkFBZ0IsQ0FBQztJQUVYLE9BQU8sQ0FBQyxJQUFhOztZQUN2QixNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMscUdBQXFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDck8sT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEtBQWEsRUFBRSxPQUFlOztZQUMxQyxNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsZ0lBQWdJO2dCQUNoSSxpRUFBaUUsQ0FBQyxDQUFDO1lBQ25HLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sRUFBRSxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzdELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFTyxRQUFRLENBQUMsU0FBYztRQUMzQixJQUFJLFVBQVUsR0FBYyxFQUFFLENBQUM7UUFDL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWSxDQUFDLElBQVM7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxrQkFBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksK0JBQWEsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sZUFBZSxDQUFDLGdCQUFxQjtRQUN6QyxJQUFJLE9BQU8sR0FBb0IsRUFBRSxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLElBQVM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBRUo7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=