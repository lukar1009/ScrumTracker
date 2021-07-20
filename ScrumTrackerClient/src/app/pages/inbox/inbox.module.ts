import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InboxComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    TranslateModule
  ],
  exports: [InboxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InboxModule { }
