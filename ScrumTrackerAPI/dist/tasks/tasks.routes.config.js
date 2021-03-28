"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const tasks_controller_1 = __importDefault(require("./controllers/tasks.controller"));
const tasks_middleware_1 = __importDefault(require("./middleware/tasks.middleware"));
class TasksRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'TasksRoutes');
    }
    configureRoutes() {
        this.app.route('/tasks')
            .get(tasks_controller_1.default.listTasks)
            .post(tasks_middleware_1.default.validateRequiredTaskBodyFields, tasks_controller_1.default.createTask);
        this.app.route('/tasks/statuses')
            .get(tasks_controller_1.default.listTaskStatuses);
        return this.app;
    }
}
exports.TasksRoutes = TasksRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Mucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rhc2tzL3Rhc2tzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLHNGQUE2RDtBQUM3RCxxRkFBNEQ7QUFFNUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFNBQVMsQ0FBQzthQUM5QixJQUFJLENBQUMsMEJBQWUsQ0FBQyw4QkFBOEIsRUFDOUMsMEJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUV6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN4QixHQUFHLENBQUMsMEJBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFsQkQsa0NBa0JDIn0=