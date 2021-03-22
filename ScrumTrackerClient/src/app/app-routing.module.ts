import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBotComponent } from './shared/components/chatbot/chatbot.component';

const routes: Routes = [
  {
    path: "chatbot",
    component: ChatBotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
