import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './shared/services/socket.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdminPanelModule } from './pages/admin-panel/admin-panel.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { InboxModule } from './pages/inbox/inbox.module';
import { LoginModule } from './pages/login/login.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { TasksModule } from './pages/tasks/tasks.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CoreModule,
    SharedModule
    // HomeModule,
    // AdminPanelModule,
    // DashboardModule,
    // InboxModule,
    // LoginModule,
    // ProjectsModule,
    // TasksModule
  ],
  providers: [
    SocketService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}