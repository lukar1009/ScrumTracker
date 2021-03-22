import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './shared/services/socket.service';
import { ChatBotComponent } from './shared/components/chatbot/chatbot.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SocketService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
