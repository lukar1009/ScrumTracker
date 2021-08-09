import { Message } from 'src/app/core/models/inbox/message'; 
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Conversation } from 'src/app/core/models/inbox/conversation';
import { User } from 'src/app/core/models/user';
import { DataService } from 'src/app/shared/services/data.service';
import { InboxService } from 'src/app/shared/services/inbox.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {

  public loggedUserId: number;

  public usersArray: User[] = [];
  public usersArrayFiltered: User[] = [];
  public filterValue: string = "";

  public plusModalOpened: boolean = false;
  public plusTooltipVisible: boolean = false;
  public refreshTooltipVisible: boolean = false;

  public conversationsArray: Conversation[] = [];

  private usersSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService,
              private _inboxService: InboxService,
              private _localStorageService: LocalStorageService) { }
  
  ngOnInit(): void {
    this.subscribeToUsersArray();
    this.getLoggedUserId();
  }
  
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  
  subscribeToUsersArray() {
    this.usersSubscription = this._dataService.usersArray.subscribe(users => {
      this.usersArray = this.usersArrayFiltered = users;
      
    });
  }

  getLoggedUserId() {
    let id = this._localStorageService.getItem("id");
    if(id) {
      this.loggedUserId = +id;
      this.getAllConversations();
    }
  }

  getAllConversations() {
    this._inboxService.getAllConversations(this.loggedUserId).toPromise().then(data => {
      console.log(data);
      this.mapConversationsResponse(data);
    });
  }

  mapConversationsResponse(data: any) {
    let messagesArray = data.map((x: any) => this.mapMessageEntity(x));
    for(let i = 0; i < messagesArray.length; i++) {
      if(!this.checkIfUserIsAlreadyAddedToArray(messagesArray[i].toUserId)) {
        let conversation = new Conversation();
        conversation.contactUser = this.usersArray.find(x => x.id == messagesArray[i].toUserId);
        conversation.initiatingUserId = messagesArray[i].initiatingUserId;
        conversation.hasNewMessages = this.checkIfConversationHasNewMessages(messagesArray.filter((x: any) => x.toUserId == conversation.contactUser?.id));
        this.conversationsArray.push(conversation);
      }
    }
    console.log(this.conversationsArray);
  }

  checkIfUserIsAlreadyAddedToArray(userId: number) {
    for(let i = 0; i < this.conversationsArray.length; i++) {
      if(this.conversationsArray[i].contactUser?.id == userId) {
        return true;
      }
    }
    return false;
  }

  checkIfConversationHasNewMessages(messagesArray: any): boolean {
      for(let i = 0; i < messagesArray.length; i++) {
        if(messagesArray[i].isReadMessage == 'N')
          return true;
      }
      return false;
  }

  mapMessageEntity(data: any) {
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

  plusTooltipToggle() {
    this.plusTooltipVisible = !this.plusTooltipVisible;
  }

  refreshTooltipToggle() {
    this.refreshTooltipVisible = !this.refreshTooltipVisible;
  }

  openOrClosePlusModal() {
    this.plusModalOpened = !this.plusModalOpened;
  }

  filterUsersList(e: any) {
    this.filterValue = e.value;
    if(this.filterValue != null && this.filterValue != undefined && this.filterValue.length > 0) {
      this.usersArrayFiltered = this.usersArray.filter(user => user.name?.toLowerCase().includes(this.filterValue.toLowerCase()));
    } else {
      this.usersArrayFiltered = this.usersArray;
    }
  }

  onUserClick(userId: number) {
    let user = this.usersArray.find(x => x.id == userId);
    if(user != undefined) {
      this._dataService.changeSelectedUserForConversation(user);
    }
  }

  onUserClickFromList(e: any) {
    let user = this.usersArray.find(x => x.id == e.contactUser.id);
    if(user != undefined) {
      this._dataService.changeSelectedUserForConversation(user);
      this.changeStatus(this.loggedUserId!, user!.id!, 'Y');
      let selectedUser = this.conversationsArray.find(x => x.contactUser?.id == user?.id);
      if(selectedUser != undefined) {
        selectedUser.hasNewMessages = false;
      }
    }
  }

  changeConversationStatus(item: Conversation) {
    item.hasNewMessages = !item.hasNewMessages;
    this.changeStatus(item.initiatingUserId!, item.contactUser!.id!, !item.hasNewMessages ? 'Y' : 'N');
  }

  changeStatus(initiatingUserId: number, contactUserId: number, isReadMessage: string) {
    this._inboxService.changeMessageStatus(initiatingUserId, contactUserId, isReadMessage).toPromise().then(response => {
      console.log(response);
    });    
  }

}
