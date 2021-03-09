import UserDao from '../dao/user.dao';
import { CRUD } from "../../common/interfaces/crud.interface";
import { UserDto } from "../dto/user.dto";

class UsersService implements CRUD {

    async create(resource: UserDto) {
        return UserDao.addUser(resource);
    }

    async deleteById(resourceId: string) {
        return UserDao.removeUserById(resourceId);
    };

    async list(limit: number, page: number) {
        return UserDao.getUsers();
    };

    async patchById(resource: UserDto) {
        return UserDao.patchUserById(resource)
    };

    async readById(resourceId: string) {
        return UserDao.getUserById(resourceId);
    };

    async updateById(resource: UserDto) {
        return UserDao.putUserById(resource);
    };

    async getUserByEmail(email: string) {
        return UserDao.getUserByEmail(email);
    }
}

export default new UsersService();