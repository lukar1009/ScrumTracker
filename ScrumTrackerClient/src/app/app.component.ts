import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ScrumTrackerClient';

  private selectedLanguageSubscription: Subscription = new Subscription();

  constructor(private translate: TranslateService,
              private _dataService: DataService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.selectedLanguageSubscription = this._dataService.selectedLanguage.subscribe(lang => {
      this.translate.use(lang);
    });
  }
  
  ngOnDestroy(): void {
    this.selectedLanguageSubscription.unsubscribe();
  }



}
