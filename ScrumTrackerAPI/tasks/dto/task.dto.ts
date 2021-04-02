import { TaskStatusDto } from "./task-status.dto";

export class TaskDto {
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    estimatedTime: number | undefined;
    timeSpent: number | undefined;
    taskStatus: TaskStatusDto | undefined;
    assignedDeveloperId: number | undefined;
    scrumMasterId: number | undefined;
}