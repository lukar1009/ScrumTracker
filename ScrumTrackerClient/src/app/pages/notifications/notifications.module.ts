import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    TranslateModule
  ],
  exports: [NotificationsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationsModule { }
