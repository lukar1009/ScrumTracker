import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  public getAllTasksByUser(userId: number) {
    let url = environment.apiUrl + `/tasks/${userId}`;
    return this.http.get(url);
  }

}
