import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {

  public usersArray: User[] = [];
  public usersArrayFiltered: User[] = [];
  public filterValue: string = "";

  public plusModalOpened: boolean = false;
  public plusTooltipVisible: boolean = false;
  public refreshTooltipVisible: boolean = false;

  conversations: any[] = [
    {
      id: 1,
      name: 'Test'
    },
    {
      id: 2,
      name: 'Test2'
    },
    {
      id: 3,
      name: 'Test3'
    }
  ];

  private usersSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }
  
  ngOnInit(): void {
    this.subscribeToUsersArray();
  }
  
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  
  subscribeToUsersArray() {
    this.usersSubscription = this._dataService.usersArray.subscribe(users => {
      this.usersArray = this.usersArrayFiltered = users;
      
    });
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

}
