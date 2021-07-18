import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService,
              private _dataService: DataService) {
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

  onTranslateButtonClick(lang: string) {
    console.log(lang);
    this._dataService.changeSelectedLanguage(lang);
  }

  goToLoginPage() {
    
  }

}
