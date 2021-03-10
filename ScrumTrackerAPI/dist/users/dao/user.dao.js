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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const database_1 = require("../../config/database");
const log = debug_1.default('app:in-memory-dao');
class UserDao {
    constructor() {
        this.users = [];
        log('Created new instance of UserDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const usersResult = yield conn.query('select * from user where ID=' + 1);
            return usersResult[0];
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => user.id === userId);
        });
    }
    putUserById(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === user.id);
            this.users.splice(objIndex, 1, user);
            return `${user.id} updated via put`;
        });
    }
    patchUserById(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === user.id);
            let currentUser = this.users[objIndex];
            const allowedPatchFields = ["password", "firstName", "lastName", "permissionLevel"];
            for (let field of allowedPatchFields) {
                if (field in user) {
                    // @ts-ignore
                    currentUser[field] = user[field];
                }
            }
            this.users.splice(objIndex, 1, currentUser);
            return `${user.id} patched`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.email === email);
            let currentUser = this.users[objIndex];
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
    mapUsers(usersData) {
    }
}
exports.default = new UserDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9kYW8vdXNlci5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBQzFCLG9EQUFnRDtBQUVoRCxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxPQUFPO0lBR1Q7UUFGQSxVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUd2QixHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUssT0FBTyxDQUFDLElBQWE7O1lBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDVixNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekUsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxJQUFhOztZQUMzQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLGtCQUFrQixDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxJQUFhOztZQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDcEYsS0FBSyxJQUFJLEtBQUssSUFBSSxrQkFBa0IsRUFBRTtnQkFDbEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO29CQUNmLGFBQWE7b0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEM7YUFDSjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDNUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsTUFBYzs7WUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEtBQWE7O1lBQzlCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBdUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztZQUN4RixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksV0FBVyxFQUFFO2dCQUNiLE9BQU8sV0FBVyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7SUFFTyxRQUFRLENBQUMsU0FBYztJQUUvQixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=