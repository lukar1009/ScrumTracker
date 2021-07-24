import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/core/models/chat-bot/message';
import { User } from 'src/app/core/models/user';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  
  public chatbotTooltipVisible: boolean = false; 
  public chatbotModalOpened: boolean = false;

  
  public messageArray: Message[] = [];
  public message = ""

  public users: User[] = [];
  
  private recievedReplySubscription: Subscription = new Subscription();

  constructor(private _socketService: SocketService) { }
              
  ngOnInit(): void {
    this.recievedReplySubscription = this._socketService.receivedReply().subscribe(data => {
      this.messageArray.push({ name:'Bot', message: data.outputMessage, botMessage: true });
    });
  }
  ngOnDestroy(): void {
    this.recievedReplySubscription.unsubscribe();
  }

  toggleTooltip() {
    this.chatbotTooltipVisible = !this.chatbotTooltipVisible;
  }

  openOrCloseChatBot() {
    this.chatbotModalOpened = !this.chatbotModalOpened;
    this.messageArray = [];
    this.message = "";
  }

  sendMessage(){
      const data = { message: this.message };
      this._socketService.sendMessage(data);
      this.messageArray.push({ name: 'You', message: this.message, botMessage: false });
      this.message = '';
  }
}
