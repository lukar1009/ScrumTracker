export default class Notification {
    constructor() {
        this.id = 0;
        this.title = "";
        this.description = "";
        this.dateOccured = new Date();
        this.forUserId = 0;
        this.byUserId = 0;
        this.projectId = 0;
        this.taskId = 0;
    }
}