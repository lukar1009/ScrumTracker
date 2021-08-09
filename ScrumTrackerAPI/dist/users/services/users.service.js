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
const user_dao_1 = __importDefault(require("../dao/user.dao"));
class UsersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.addUser(resource);
        });
    }
    createRole(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.addRole(resource);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.removeUserById(resourceId);
        });
    }
    ;
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUsers();
        });
    }
    ;
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUserById(resourceId);
        });
    }
    ;
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.putUserById(resource);
        });
    }
    ;
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUserByEmail(email);
        });
    }
    listRoles(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getRoles(limit, page);
        });
    }
    getRoleByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getRoleByName(name);
        });
    }
    updateRoleById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.updateRoleById(resource);
        });
    }
    ;
    deleteRoleById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.deleteRoleById(resourceId);
        });
    }
    ;
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBc0M7QUFLdEMsTUFBTSxZQUFZO0lBRVIsTUFBTSxDQUFDLFFBQWlCOztZQUMxQixPQUFPLGtCQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFpQjs7WUFDOUIsT0FBTyxrQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQy9CLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMsT0FBTyxrQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFSSxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLE9BQU8sa0JBQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLFVBQVUsQ0FBQyxRQUFpQjs7WUFDOUIsT0FBTyxrQkFBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksY0FBYyxDQUFDLEtBQWE7O1lBQzlCLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUN2QyxPQUFPLGtCQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsSUFBWTs7WUFDNUIsT0FBTyxrQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsUUFBaUI7O1lBQ2xDLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLGNBQWMsQ0FBQyxVQUFrQjs7WUFDbkMsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0w7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=