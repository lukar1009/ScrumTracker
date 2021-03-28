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
const push_notifications_routes_config_1 = require("./push-notifications/push-notifications.routes.config");
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
routes.push(new push_notifications_routes_config_1.PushNotificationsRoutes(app));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwyQ0FBNkI7QUFDN0Isd0RBQTBDO0FBRTFDLGlEQUFtQztBQUNuQyxnRUFBa0Q7QUFDbEQsZ0RBQXdCO0FBRXhCLHFFQUEwRDtBQUMxRCxrREFBMEI7QUFDMUIscUVBQTBEO0FBQzFELDhFQUFtRTtBQUNuRSw2RkFBa0Y7QUFDbEYsOEVBQW1FO0FBQ25FLHFDQUE2QztBQUM3Qyw0R0FBZ0c7QUFFaEcsTUFBTSxHQUFHLEdBQXdCLGlCQUFPLEVBQUUsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsTUFBTSxNQUFNLEdBQThCLEVBQUUsQ0FBQztBQUM3QyxNQUFNLFFBQVEsR0FBb0IsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMxQixVQUFVLEVBQUU7UUFDUixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0tBQ25DO0lBQ0QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUN4QjtDQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUosc0JBQXNCO0FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksdUNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpREFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSx1Q0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDBEQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQy9CLFVBQVUsRUFBRTtRQUNSLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7S0FDbkM7SUFDRCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQ3hCO0NBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSiwwQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUxQix5Q0FBeUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLFFBQVEsQ0FBQyxzQ0FBc0MsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1FBQ3pDLFFBQVEsQ0FBQyx5QkFBeUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=