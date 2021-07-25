import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { InboxService } from './services/inbox.service';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    DxButtonModule,
    DxTooltipModule,
    DxPopoverModule,
    DxTextBoxModule,
    DxScrollViewModule
  ],
  exports: [
    TranslatePipe,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    DataService,
    InboxService,
    UserService,
    TranslatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }