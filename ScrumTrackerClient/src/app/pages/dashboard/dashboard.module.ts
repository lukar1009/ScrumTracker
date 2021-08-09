import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { DxListModule } from 'devextreme-angular/ui/list';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxListModule,
    TranslateModule
  ],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
