import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  public selectedLanguage = this.selectedLanguageSubject.asObservable();

  private usersArraySubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public usersArray = this.usersArraySubject.asObservable();

  constructor() { }

  public changeSelectedLanguage(lang: string) {
    this.selectedLanguageSubject.next(lang);
  }

  public changeUsersArray(users: User[]) {
    this.usersArraySubject.next(users);
  }

}
