import UserDao from '../dao/user.dao';
import { CRUD } from "../../common/interfaces/crud.interface";
import { UserDto } from "../dto/user.dto";
import { RoleDto } from '../dto/role.dto';

class UsersService implements CRUD {

    async create(resource: UserDto) {
        return UserDao.addUser(resource);
    }

    async createRole(resource: RoleDto) {
        return UserDao.addRole(resource);
    }

    async deleteById(resourceId: number) {
        return UserDao.removeUserById(resourceId);
    };

    async list(limit: number, page: number) {
        return UserDao.getUsers();
    };

    async readById(resourceId: number) {
        return UserDao.getUserById(resourceId);
    };

    async updateById(resource: UserDto) {
        return UserDao.putUserById(resource);
    };

    async getUserByEmail(email: string) {
        return UserDao.getUserByEmail(email);
    }

    async listRoles(limit: number, page: number) {
        return UserDao.getRoles(limit, page);
    }

    async getRoleByName(name: string) {
        return UserDao.getRoleByName(name);
    }

    async updateRoleById(resource: RoleDto) {
        return UserDao.updateRoleById(resource);
    };

    async deleteRoleById(resourceId: string) {
        return UserDao.deleteRoleById(resourceId);
    };
}

export default new UsersService();