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
    patchById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.patchUserById(resource);
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
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBc0M7QUFJdEMsTUFBTSxZQUFZO0lBRVIsTUFBTSxDQUFDLFFBQWlCOztZQUMxQixPQUFPLGtCQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNsQyxPQUFPLGtCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLFNBQVMsQ0FBQyxRQUFpQjs7WUFDN0IsT0FBTyxrQkFBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMxQyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksUUFBUSxDQUFDLFVBQWtCOztZQUM3QixPQUFPLGtCQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFSSxVQUFVLENBQUMsUUFBaUI7O1lBQzlCLE9BQU8sa0JBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixPQUFPLGtCQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9