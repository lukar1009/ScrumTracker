import express from 'express';

import usersService from '../services/users.service';

import argon2 from 'argon2';

import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {

    async listUsers(req: express.Request, res: express.Response) {
        const users = await usersService.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await usersService.readById(+req.params.userId);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const user = await usersService.create(req.body);
        res.status(201).send(user);
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const result = await usersService.updateById({id: req.params.userId, ...req.body});
        res.status(204).send(result);
    }

    async removeUser(req: express.Request, res: express.Response) {
        const result = await usersService.deleteById(+req.params.userId);
        res.status(204).send(result);
    }

    async listRoles(req: express.Request, res: express.Response) {
        const roles = await usersService.listRoles(100, 0);
        res.status(200).send(roles);
    }

    async createRole(req: express.Request, res: express.Response) {
        const role = await usersService.createRole(req.body);
        res.status(201).send(role);
    }

    async updateRole(req: express.Request, res: express.Response) {
        const result = await usersService.updateRoleById({id: req.params.roleId, ...req.body});
        res.status(204).send(result);
    }

    async deleteRole(req: express.Request, res: express.Response) {
        const result = await usersService.deleteRoleById(req.params.roleId);
        res.status(204).send(result);
    }
}

export default new UsersController();