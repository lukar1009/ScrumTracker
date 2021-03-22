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
const user_dto_1 = require("../dto/user.dto");
const debug_1 = __importDefault(require("debug"));
const database_1 = require("../../config/database");
const role_dto_1 = require("../dto/role.dto");
const log = debug_1.default('app:in-memory-dao');
class UserDao {
    constructor() {
        this.users = [];
        this.roles = [];
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('insert into user set Name = ?, Email = ?, Password = ?', [user.name, user.email, user.password]);
            return user;
        });
    }
    addRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('insert into role set Name = ?', [role.name]);
            return role;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const usersResult = yield conn.query('select * from user');
            let res = this.mapUsers(usersResult[0]);
            return res;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query("select * from user where Id = (?)", userId);
            return this.mapUser(result[0]);
        });
    }
    putUserById(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('update user set Name = ?, Email = ?, Password = ? where ID = ?', [user.name, user.email, user.password, user.id]);
            return `${user.id} updated.`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('delete from user where ID = ?', [userId]);
            return `${userId} deleted.`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const res = yield conn.query(`select * from user where Email = '${email}'`);
            let user = this.mapUser(res[0]);
            return user;
        });
    }
    getRoles(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const rolesResult = yield conn.query('select * from role');
            let res = this.mapRoles(rolesResult[0]);
            return res;
        });
    }
    getRoleByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    updateRoleById(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('update role set Name = ? where ID = ?', [role.name, role.id]);
            return `${role.id} updated.`;
        });
    }
    deleteRoleById(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('delete from role where ID = ?', [roleId]);
            return `${roleId} deleted.`;
        });
    }
    mapUsers(usersData) {
        let usersArray = [];
        for (let i = 0; i < usersData.length; i++) {
            usersArray.push(this.populateUser(usersData[i]));
        }
        return usersArray;
    }
    mapUser(userData) {
        log(userData);
        if (userData[0] != undefined) {
            let user = new user_dto_1.UserDto();
            user.id = +userData[0]["ID"];
            user.name = userData[0]["Name"];
            user.email = userData[0]["Email"];
            user.password = userData[0]["Password"];
            return user;
        }
        else {
            return null;
        }
    }
    populateUser(userData) {
        let user = new user_dto_1.UserDto();
        user.id = +userData["ID"];
        user.name = userData["Name"];
        user.email = userData["Email"];
        user.password = userData["Password"];
        return user;
    }
    mapRoles(rolesData) {
        let rolesArray = [];
        for (let i = 0; i < rolesData.length; i++) {
            rolesArray.push(this.populateRole(rolesData[i]));
        }
        return rolesArray;
    }
    populateRole(roleData) {
        let role = new role_dto_1.RoleDto();
        role.id = +roleData["ID"];
        role.name = roleData["Name"];
        return role;
    }
}
exports.default = new UserDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9kYW8vdXNlci5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBMEM7QUFFMUMsa0RBQTBCO0FBQzFCLG9EQUFnRDtBQUNoRCw4Q0FBMEM7QUFHMUMsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sT0FBTztJQUlUO1FBSEEsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFDM0IsVUFBSyxHQUFtQixFQUFFLENBQUM7SUFFWCxDQUFDO0lBRVgsT0FBTyxDQUFDLElBQWE7O1lBQ3ZCLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyx3REFBd0QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNySCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsSUFBYTs7WUFDdkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxrQkFBTyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDVixNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMzRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lB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