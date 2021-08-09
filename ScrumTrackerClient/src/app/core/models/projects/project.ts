import { ProjectStatus } from "./project-status";

export class Project {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;
    projectStatus: ProjectStatus | undefined;
}