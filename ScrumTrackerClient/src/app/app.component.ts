import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User } from './core/models/user';
import { DataService } from './shared/services/data.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ScrumTrackerClient';

  private selectedLanguageSubscription: Subscription = new Subscription();

  public users: User[] = [];

  constructor(private translate: TranslateService,
              private _dataService: DataService,
              private _userService: UserService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.selectedLanguageSubscription = this._dataService.selectedLanguage.subscribe(lang => {
      this.translate.use(lang);
    });
  }
  
  ngOnDestroy(): void {
    this.selectedLanguageSubscription.unsubscribe();
  }


  getAllUsers() {
    this._userService.getAllUsers()
      .then(response => {
        this.mapUsersResponse(response);
      })
      .finally(() => {
        this._dataService.changeUsersArray(this.users);
      });
  }

  mapUsersResponse(data: any) {
    this.users = data.map((x: any) => this.populateUser(x));
  }

  populateUser(data: any) {
    let user = new User();
    user.id = data['id'];
    user.name = data['name'];
    user.email = data['email'];
    user.password = data['password'];
    return user;
  }

}
