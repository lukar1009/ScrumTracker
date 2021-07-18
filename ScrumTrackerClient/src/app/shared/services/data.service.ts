import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  public selectedLanguage = this.selectedLanguageSubject.asObservable();

  constructor() { }

  public changeSelectedLanguage(lang: string) {
    this.selectedLanguageSubject.next(lang);
  }

}
