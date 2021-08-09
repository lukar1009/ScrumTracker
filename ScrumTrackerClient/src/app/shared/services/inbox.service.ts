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

  public changeMessageStatus(initiatingUserId: number, otherUserId: number, status: string) {
    let url = environment.apiUrl + `/messages/changeMessageStatus/${initiatingUserId}/${otherUserId}/${status}`;
    return this.http.put(url, {}, {responseType: "text"});
  }

  public getAllMessagesForConversation(userId: number, otherUserId: number) {
    let url = environment.apiUrl + `/messages/getAllMessagesForConversation/${userId}/${otherUserId}`;
    return this.http.get(url);
  }

  public sendMessage(message: any) {
    let url = environment.apiUrl + `/messages/sendMessage`;
    return this.http.post(url, message);
  }

}
