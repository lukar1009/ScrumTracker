import { TaskStatus } from "./task-status";

export class Task {
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    estimatedTime: number | undefined;
    timeSpent: number | undefined;
    taskStatus: TaskStatus | undefined;
    assignedDeveloperId: number | undefined;
    scrumMasterId: number | undefined;
}