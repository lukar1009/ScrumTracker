import { ProjectStatusDto } from "./project-status.dto";

export class ProjectDto {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;
    projectStatus: ProjectStatusDto | undefined;
}