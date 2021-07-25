import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { DataService } from 'src/app/shared/services/data.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public userEmail: string = "";
  public userPassword: string = "";

  public usersArray: User[] = [];
  private usersSubscription: Subscription = new Subscription();

  constructor(private _localStorageService: LocalStorageService,
              private _dataService: DataService,
              public _router: Router) { }

  ngOnInit(): void {
    this.usersSubscription = this._dataService.usersArray.subscribe(users => {
      this.usersArray = users;
    });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  login() {
    let user = this.usersArray.find(u => u.email == this.userEmail && u.password == this.userPassword);
    if(user != undefined) {
      this._localStorageService.setItem("id", user.id)
      this._localStorageService.setItem("email", user.email);
      this._localStorageService.setItem("name", user.name);
      this._localStorageService.setItem("password", user.password);
      this._router.navigate(['/home']);
    } else {
      alert("NO USER FOUND!");
    }
  }

}
