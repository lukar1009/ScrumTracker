import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

  private socket = io('http://localhost:3000');
  constructor() { }

  sendMessage(data: any) {
    this.socket.emit('message', data);
  }

  receivedReply() {
    const observable = new Observable<any>(observer => {
      this.socket.on('reply', (data: any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}