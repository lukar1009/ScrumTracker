import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/projects/project';
import { Task } from 'src/app/core/models/tasks/task';
import { TaskStatus } from 'src/app/core/models/tasks/task-status';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public loggedUserId: number;

  public projects: Project[] = [];
  public tasks: Task[] = [];

  constructor(private projectsService: ProjectsService,
              private tasksService: TasksService,
              public localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getAllProjects();
    let id = this.localStorageService.getItem("id");
    if(id) {
      this.loggedUserId = +id;
      this.getAllTasksByUser();
    }
  }

  getAllProjects() {
    this.projectsService.getAllProjects().toPromise().then(data => {
      this.projects = data as Project[];
    })
  }

  getAllTasksByUser() {
    this.tasksService.getAllTasksByUser(this.loggedUserId).toPromise().then(data => {
      this.mapTasks(data);
    });
  }

  mapTasks(data: any) {
    data.forEach((x:any) => {
      let task = new Task();
      task.id = x["TaskId"];
      task.title = x["Title"];
      task.description = x["Description"];
      task.taskStatus = new TaskStatus();
      task.taskStatus.id = x["TaskStatusId"];
      task.taskStatus.name = x["Name"];
      this.tasks.push(task);
    });
  }

}
