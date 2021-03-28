import { connect } from "../../config/database";
import { ProjectStatusDto } from "../dto/project-status.dto";
import { ProjectDto } from "../dto/project.dto";

class ProjectDao {

    constructor() { }

    async listProjects(limit: number, pageNum: number) {
        const conn = await connect();
        const result = await conn.query('select p.ID as ProjectID, p.Name as ProjectName, p.Description, p.StartDate, p.EndDate, ps.ID as ProjectStatusID, ps.Name as ProjectStatusName ' + 
                                        'from project p inner join project_status ps on p.ProjectStatusId = ps.ID');
        let res = this.mapProjects(result[0]);
        return res;
    }

    private mapProjects(projectsData: any) {
        let projectsArray: ProjectDto[] = [];
        for(let i = 0; i < projectsData.length; i++) {
            projectsArray.push(this.populateProject(projectsData[i]));
        }
        return projectsArray;
    }

    private populateProject(data: any) {
        let project = new ProjectDto();
        project.id = +data["ProjectID"];
        project.name = data["ProjectName"];
        project.description = data["Description"];
        project.startDate = data["StartDate"];
        project.endDate = data["EndDate"];
        project.projectStatus = new ProjectStatusDto();
        project.projectStatus.id = data["ProjectStatusID"];
        project.projectStatus.name = data["ProjectStatusName"];
        return project;
    }
}

export default new ProjectDao();