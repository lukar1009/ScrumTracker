import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getAllProjects() {
    let url = environment.apiUrl + `/projects`;
    return this.http.get(url);
  }
}
