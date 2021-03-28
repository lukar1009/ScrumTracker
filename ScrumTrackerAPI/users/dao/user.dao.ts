import { UserDto } from '../dto/user.dto';
import debug from 'debug';
import { connect } from '../../config/database';
import { RoleDto } from '../dto/role.dto';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UserDao {
    users: Array<UserDto> = [];
    roles: Array<RoleDto> = [];
    
    constructor() { }

    async addUser(user: UserDto) {
        const conn = await connect();
        await conn.execute('insert into user set Name = ?, Email = ?, Password = ?', [user.name, user.email, user.password]);
        return user;
    }

    async addRole(role: RoleDto) {
        const conn = await connect();
        await conn.execute('insert into role set Name = ?', [role.name]);
        return role;
    }

    async getUsers() {
        const conn = await connect();
        const usersResult = await conn.query('select * from user');
        let res = this.mapUsers(usersResult[0]);
        return res;
    }
    
    async getUserById(userId: number) {
        const conn = await connect();
        const result = await conn.query(
            "select * from user where Id = (?)",
            userId
        );
        return this.mapUser(result[0]);
    }

    async putUserById(user: UserDto) {
        const conn = await connect();
        await conn.execute('update user set Name = ?, Email = ?, Password = ? where ID = ?', [user.name, user.email, user.password, user.id]);
        return `${user.id} updated.`;
    }

    async removeUserById(userId: number) {
        const conn = await connect();
        await conn.execute('delete from user where ID = ?', [userId]);
        return `${userId} deleted.`;
    }

    async getUserByEmail(email: string) {
        const conn = await connect();
        const res = await conn.query(`select * from user where Email = '${email}'`);
        let user = this.mapUser(res[0]);
        return user;
    }

    async getRoles(limit: number, page: number) {
        const conn = await connect();
        const rolesResult = await conn.query('select * from role');
        let res = this.mapRoles(rolesResult[0]);
        return res;
    }

    async getRoleByName(name: string) {
        return null;
    }

    async updateRoleById(role: RoleDto) {
        const conn = await connect();
        await conn.execute('update role set Name = ? where ID = ?', [role.name, role.id]);
        return `${role.id} updated.`;
    }

    async deleteRoleById(roleId: string) {
        const conn = await connect();
        await conn.execute('delete from role where ID = ?', [roleId]);
        return `${roleId} deleted.`;
    }

    private mapUsers(usersData: any) {
        let usersArray: UserDto[] = [];
        for(let i = 0; i < usersData.length; i++) {
            usersArray.push(this.populateUser(usersData[i]));
        }
        return usersArray;
    }

    private mapUser(userData: any) {
        log(userData);
        if(userData[0] != undefined) {
            let user = new UserDto();
            user.id = +userData[0]["ID"];
            user.name = userData[0]["Name"];
            user.email = userData[0]["Email"];
            user.password = userData[0]["Password"];
            return user;        
        } else {
            return null;
        }
    }

    private populateUser(userData: any) {
        let user = new UserDto();
        user.id = +userData["ID"];
        user.name = userData["Name"];
        user.email = userData["Email"];
        user.password = userData["Password"];
        return user;
    }

    private mapRoles(rolesData: any) {
        let rolesArray: RoleDto[] = [];
        for(let i = 0; i < rolesData.length; i++) {
            rolesArray.push(this.populateRole(rolesData[i]));
        }
        return rolesArray;
    }

    private populateRole(roleData: any) {
        let role = new RoleDto();
        role.id = +roleData["ID"];
        role.name = roleData["Name"];
        return role;
    }
}

export default new UserDao();