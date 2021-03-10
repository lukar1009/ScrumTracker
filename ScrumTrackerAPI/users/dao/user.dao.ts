import { UserDto } from '../dto/user.dto';
import shortid from 'shortid';
import debug from 'debug';
import { connect } from '../../config/database';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UserDao {
    users: Array<UserDto> = [];
    
    constructor() {
        log('Created new instance of UserDao');
    }

    async addUser(user: UserDto) {
        user.id = shortid.generate();
        this.users.push(user);
        return user.id;
    }

    async getUsers() {
        const conn = await connect();
        const usersResult = await conn.query('select * from user');
        return usersResult[0];
    }
    
    async getUserById(userId: string) {
        return this.users.find((user: { id: string; }) => user.id === userId);
    }

    async putUserById(user: UserDto) {
        const objIndex = this.users.findIndex((obj: { id: string; }) => obj.id === user.id);
        this.users.splice(objIndex, 1, user);
        return `${user.id} updated via put`;
    }
    
    async patchUserById(user: UserDto) {
        const objIndex = this.users.findIndex((obj: { id: string; }) => obj.id === user.id);
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
    }

    async removeUserById(userId: string) {
        const objIndex = this.users.findIndex((obj: { id: string; }) => obj.id === userId);
        this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }

    async getUserByEmail(email: string) {
        const objIndex = this.users.findIndex((obj: { email: string; }) => obj.email === email);
        let currentUser = this.users[objIndex];
        if (currentUser) {
            return currentUser;
        } else {
            return null;
        }
    }

    private mapUsers(usersData: any) {
        
    }
}

export default new UserDao();