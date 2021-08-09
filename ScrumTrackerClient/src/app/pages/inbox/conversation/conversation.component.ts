import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/core/models/inbox/message';
import { User } from 'src/app/core/models/user';
import { DataService } from 'src/app/shared/services/data.service';
import { InboxService } from 'src/app/shared/services/inbox.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnDestroy {

  public loggedUserId: number;

  public selectedUser: User = new User();
  public conversationLoaded: boolean = false;

  public messagesArray: Message[] = [];

  public message: Message = new Message();
  public messageText: string;

  private selectedUserForConversationSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService,
              private _translateService: TranslateService,
              public _localStorageService: LocalStorageService,
              public _inboxService: InboxService) { }
  
  ngOnInit(): void {
    let id = this._localStorageService.getItem("id");
    if(id) {
      this.loggedUserId = +id;
    }
    this.subscribeToSelectedUser();
  }
  
  ngOnDestroy(): void {
    this.selectedUserForConversationSubscription.unsubscribe();
  }

  subscribeToSelectedUser() {
    if(this._dataService.selectedUserForConversation != undefined) {
      this.selectedUserForConversationSubscription = this._dataService.selectedUserForConversation.subscribe(user => {
        this.selectedUser = user;
        if(this.selectedUser != null && this.selectedUser != undefined && this.selectedUser?.id != null && this.selectedUser?.id != undefined) {
          this.messagesArray.length = 0;
          this.getAllMessagesForConversation(this.loggedUserId, this.selectedUser.id);
        }
      });
    }
  }

  displayUsersName() {
    if(this.selectedUser == null || this.selectedUser == undefined
      || this.selectedUser.name == null || this.selectedUser.name == undefined || this.selectedUser.name == "") {
        return this._translateService.instant("LK_NOT_SELECTED_USER");
    } else {
      return this.selectedUser.name;
    }
  }

  getAllMessagesForConversation(userId: number, otherUserId: number) {
    this._inboxService.getAllMessagesForConversation(userId, otherUserId).toPromise().then(response => {
      this.mapMessagesResponse(response);
    });
  }

  mapMessagesResponse(data: any) {
    this.messagesArray = data.map((x: any) => this.populateMessage(x));
  }

  populateMessage(data: any) {
    let message = new Message();
    message.id = data['id'];
    message.title = data['title'];
    message.content = data['content'];
    message.fromUserId = data['fromUserId'];
    message.toUserId = data['toUserId'];
    message.isDeletedMessage = data['isDeletedMessage'];
    message.isReadMessage = data['isReadMessage'];
    message.initiatingUserId = data['initiatingUserId'];
    return message;
  }

  sendMessage() {
    this.message = new Message();
    this.message.content = this.messageText;
    this.message.fromUserId = this.loggedUserId;
    this.message.toUserId = this.selectedUser.id;
    this.message.isDeletedMessage = 'N';
    this.message.isReadMessage = 'N';
    this.message.title = this.messageText;
    this.message.id = 0;
    this.message.initiatingUserId = this.loggedUserId;
    this._inboxService.sendMessage(this.message).toPromise().then(data => {
      this.messageText = "";
      this.getAllMessagesForConversation(this.loggedUserId, this.selectedUser.id!);
    }).catch(e => console.log(e));
  }

}
