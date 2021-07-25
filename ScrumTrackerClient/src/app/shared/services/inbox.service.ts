import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class InboxService {

  constructor(private http: HttpClient) { }

  public getAllConversations(initiatingUserId: number) {
    let url = environment.apiUrl + `/messages/getAllConversations/${initiatingUserId}`;
    return this.http.get(url);
  }

}
