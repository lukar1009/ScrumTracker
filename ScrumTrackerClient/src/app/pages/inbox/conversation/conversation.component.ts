import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnDestroy {

  public selectedUser: User = new User();
  public conversationLoaded: boolean = false;

  private selectedUserForConversationSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService,
              private _translateService: TranslateService) { }
  
  ngOnInit(): void {
    this.subscribeToSelectedUser();
  }
  
  ngOnDestroy(): void {
    this.selectedUserForConversationSubscription.unsubscribe();
  }

  subscribeToSelectedUser() {
    if(this._dataService.selectedUserForConversation != undefined) {
      this.selectedUserForConversationSubscription = this._dataService.selectedUserForConversation.subscribe(user => {
        this.selectedUser = user;
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

}
