import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConversationComponent } from './conversation/conversation.component';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';

@NgModule({
  declarations: [InboxComponent, ConversationComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    TranslateModule,
    DxDrawerModule,
    DxListModule,
    DxButtonModule,
    DxTextBoxModule,
    DxPopoverModule,
    DxTooltipModule,
    DxScrollViewModule
  ],
  exports: [
    InboxComponent,
    ConversationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InboxModule { }
