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
const users_service_1 = __importDefault(require("../services/users.service"));
const argon2_1 = __importDefault(require("argon2"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:users-controller');
class UsersController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield users_service_1.default.list(100, 0);
            res.status(200).send(users);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(+req.params.userId);
            res.status(200).send(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield argon2_1.default.hash(req.body.password);
            const user = yield users_service_1.default.create(req.body);
            res.status(201).send(user);
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield argon2_1.default.hash(req.body.password);
            const result = yield users_service_1.default.updateById(Object.assign({ id: req.params.userId }, req.body));
            res.status(204).send(result);
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_service_1.default.deleteById(+req.params.userId);
            res.status(204).send(result);
        });
    }
    listRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield users_service_1.default.listRoles(100, 0);
            res.status(200).send(roles);
        });
    }
    createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield users_service_1.default.createRole(req.body);
            res.status(201).send(role);
        });
    }
    updateRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_service_1.default.updateRoleById(Object.assign({ id: req.params.roleId }, req.body));
            res.status(204).send(result);
        });
    }
    deleteRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield users_service_1.default.deleteRoleById(req.params.roleId);
            res.status(204).send(result);
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4RUFBcUQ7QUFFckQsb0RBQTRCO0FBRTVCLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxlQUFlO0lBRVgsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsTUFBTSxNQUFNLEdBQUcsTUFBTSx1QkFBWSxDQUFDLFVBQVUsaUJBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSx1QkFBWSxDQUFDLGNBQWMsaUJBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2RixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSx1QkFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9