import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable()
export class DataService {

  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  public selectedLanguage = this.selectedLanguageSubject.asObservable();

  private usersArraySubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public usersArray = this.usersArraySubject.asObservable();

  private selectedUserForConversationSubject: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  public selectedUserForConversation = this.selectedUserForConversationSubject.asObservable();

  constructor() { }

  public changeSelectedLanguage(lang: string) {
    this.selectedLanguageSubject.next(lang);
  }

  public changeUsersArray(users: User[]) {
    this.usersArraySubject.next(users);
  }

  public changeSelectedUserForConversation(user: User) {
    this.selectedUserForConversationSubject.next(user);
  }

}
