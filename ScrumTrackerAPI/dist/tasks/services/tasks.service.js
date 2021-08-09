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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_dao_1 = __importDefault(require("../dao/task.dao"));
class TasksService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_dao_1.default.listTasks(limit, page);
        });
    }
    listByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_dao_1.default.listTasksByUser(userId);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_dao_1.default.addTask(resource);
        });
    }
    updateById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return "";
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return "";
        });
    }
    listTaskStatuses() {
        return __awaiter(this, void 0, void 0, function* () {
            return task_dao_1.default.getAllTaskStatuses();
        });
    }
}
exports.default = new TasksService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rhc2tzL3NlcnZpY2VzL3Rhc2tzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBc0M7QUFFdEMsTUFBTSxZQUFZO0lBRVIsSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNsQyxPQUFPLGtCQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsTUFBYzs7WUFDM0IsT0FBTyxrQkFBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBYTs7WUFDdEIsT0FBTyxrQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBZTs7WUFDNUIsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsVUFBZTs7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWU7O1lBQzVCLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRUssZ0JBQWdCOztZQUNsQixPQUFPLGtCQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==