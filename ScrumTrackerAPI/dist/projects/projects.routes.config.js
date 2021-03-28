"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const projects_controller_1 = __importDefault(require("./controllers/projects.controller"));
class ProjectsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ProjectsRoutes');
    }
    configureRoutes() {
        this.app.route('/projects')
            .get(projects_controller_1.default.listProjects);
        return this.app;
    }
}
exports.ProjectsRoutes = ProjectsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Byb2plY3RzL3Byb2plY3RzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLDRGQUFtRTtBQUVuRSxNQUFhLGNBQWUsU0FBUSx5Q0FBa0I7SUFDbEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDbEIsR0FBRyxDQUFDLDZCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFaRCx3Q0FZQyJ9