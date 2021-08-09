"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
const project_status_dto_1 = require("../dto/project-status.dto");
const project_dto_1 = require("../dto/project.dto");
class ProjectDao {
    constructor() { }
    listProjects(limit, pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query('select p.ID as ProjectID, p.Name as ProjectName, p.Description, p.StartDate, p.EndDate, ps.ID as ProjectStatusID, ps.Name as ProjectStatusName ' +
                'from project p inner join project_status ps on p.ProjectStatusId = ps.ID');
            let res = this.mapProjects(result[0]);
            return res;
        });
    }
    mapProjects(projectsData) {
        let projectsArray = [];
        for (let i = 0; i < projectsData.length; i++) {
            projectsArray.push(this.populateProject(projectsData[i]));
        }
        return projectsArray;
    }
    populateProject(data) {
        let project = new project_dto_1.ProjectDto();
        project.id = +data["ProjectID"];
        project.name = data["ProjectName"];
        project.description = data["Description"];
        project.startDate = data["StartDate"];
        project.endDate = data["EndDate"];
        project.projectStatus = new project_status_dto_1.ProjectStatusDto();
        project.projectStatus.id = data["ProjectStatusID"];
        project.projectStatus.name = data["ProjectStatusName"];
        return project;
    }
}
exports.default = new ProjectDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9kYW8vcHJvamVjdC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvREFBZ0Q7QUFDaEQsa0VBQTZEO0FBQzdELG9EQUFnRDtBQUVoRCxNQUFNLFVBQVU7SUFFWixnQkFBZ0IsQ0FBQztJQUVYLFlBQVksQ0FBQyxLQUFhLEVBQUUsT0FBZTs7WUFDN0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxrQkFBTyxFQUFFLENBQUM7WUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGlKQUFpSjtnQkFDakosMEVBQTBFLENBQUMsQ0FBQztZQUM1RyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRU8sV0FBVyxDQUFDLFlBQWlCO1FBQ2pDLElBQUksYUFBYSxHQUFpQixFQUFFLENBQUM7UUFDckMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRU8sZUFBZSxDQUFDLElBQVM7UUFDN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSx3QkFBVSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUkscUNBQWdCLEVBQUUsQ0FBQztRQUMvQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2RCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIn0=