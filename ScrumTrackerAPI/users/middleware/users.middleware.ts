import express from 'express';
import userService from '../services/users.service';

class UsersMiddleware {
    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.email && req.body.password && req.body.name) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields for new user.`});
        }
    }
    
    async validateSameEmailDoesntExist(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await userService.getUserByEmail(req.body.email);
        if (user) {
            res.status(400).send({error: `User email is already in use.`});
        } else {
            next();
        }
    }
    
    async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await userService.readById(+req.params.userId);
        if (user) {
            next();
        } else {
            res.status(404).send({error: `User not found.`});
        }
    }

    async extractUserId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.userId;
        next();
    }

    async extractRoleId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.roleId;
        next();
    }

    async validateRequeiredRoleBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body && req.body.name) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields for new role.`});
        }
    }

    async validateRoleExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const role = await userService.getRoleByName(req.params.name);
        if(role) {
            res.status(400).send({error: `Role already exists.`});
        } else {
            next();
        }
    }
}

export default new UsersMiddleware();