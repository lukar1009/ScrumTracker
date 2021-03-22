"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const bodyparser = __importStar(require("body-parser"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const users_routes_config_1 = require("./users/users.routes.config");
const debug_1 = __importDefault(require("debug"));
const tasks_routes_config_1 = require("./tasks/tasks.routes.config");
const projects_routes_config_1 = require("./projects/projects.routes.config");
const notifications_routes_config_1 = require("./notifications/notifications.routes.config");
const messages_routes_config_1 = require("./messages/messages.routes.config");
const socket_1 = require("./socket");
const app = express_1.default();
const server = http.createServer(app);
const port = 3000;
const routes = [];
const debugLog = debug_1.default('app');
app.use(bodyparser.json());
app.use(cors_1.default());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
}));
//dodavanje novih ruta
routes.push(new users_routes_config_1.UsersRoutes(app));
routes.push(new tasks_routes_config_1.TasksRoutes(app));
routes.push(new projects_routes_config_1.ProjectsRoutes(app));
routes.push(new notifications_routes_config_1.NotificationsRoutes(app));
routes.push(new messages_routes_config_1.MessagesRoutes(app));
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
}));
socket_1.setSocketInstance(server);
//Testna ruta, za testiranje rada servisa
app.get('/', (req, res) => {
    res.status(200).send(`Server up and running!`);
});
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwyQ0FBNkI7QUFDN0Isd0RBQTBDO0FBRTFDLGlEQUFtQztBQUNuQyxnRUFBa0Q7QUFDbEQsZ0RBQXdCO0FBRXhCLHFFQUEwRDtBQUMxRCxrREFBMEI7QUFDMUIscUVBQTBEO0FBQzFELDhFQUFtRTtBQUNuRSw2RkFBa0Y7QUFDbEYsOEVBQW1FO0FBQ25FLHFDQUE2QztBQUU3QyxNQUFNLEdBQUcsR0FBd0IsaUJBQU8sRUFBRSxDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixNQUFNLE1BQU0sR0FBOEIsRUFBRSxDQUFDO0FBQzdDLE1BQU0sUUFBUSxHQUFvQixlQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzFCLFVBQVUsRUFBRTtRQUNSLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7S0FDbkM7SUFDRCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQ3hCO0NBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSixzQkFBc0I7QUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSx1Q0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlEQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHVDQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVyQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDL0IsVUFBVSxFQUFFO1FBQ1IsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtLQUNuQztJQUNELE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FDeEI7Q0FDSixDQUFDLENBQUMsQ0FBQztBQUVKLDBCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTFCLHlDQUF5QztBQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUE7QUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckIsUUFBUSxDQUFDLHNDQUFzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7UUFDekMsUUFBUSxDQUFDLHlCQUF5QixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==