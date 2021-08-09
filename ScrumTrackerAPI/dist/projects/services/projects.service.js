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
const project_dao_1 = __importDefault(require("../dao/project.dao"));
class ProjectsService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return project_dao_1.default.listProjects(limit, page);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
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
}
exports.default = new ProjectsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3NlcnZpY2VzL3Byb2plY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRUFBNEM7QUFFNUMsTUFBTSxlQUFlO0lBQ1gsSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNsQyxPQUFPLHFCQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBYTs7WUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWU7O1lBQzVCLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLFVBQWU7O1lBQzFCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFlOztZQUM1QixPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9