import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TranslateModule
  ],
  exports: [TasksComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksModule { }
