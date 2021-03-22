import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';
import debug from 'debug';
import { TasksRoutes } from './tasks/tasks.routes.config';
import { ProjectsRoutes } from './projects/projects.routes.config';
import { NotificationsRoutes } from './notifications/notifications.routes.config';
import { MessagesRoutes } from './messages/messages.routes.config';
import { setSocketInstance } from './socket';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(bodyparser.json());
app.use(cors());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

//dodavanje novih ruta
routes.push(new UsersRoutes(app));
routes.push(new TasksRoutes(app));
routes.push(new ProjectsRoutes(app));
routes.push(new NotificationsRoutes(app));
routes.push(new MessagesRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

setSocketInstance(server);

//Testna ruta, za testiranje rada servisa
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});