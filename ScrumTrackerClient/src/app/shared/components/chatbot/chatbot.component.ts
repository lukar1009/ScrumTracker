import { Component, OnDestroy, OnInit } from "@angular/core";
import { User } from "src/app/core/models/user";
import { SocketService } from "../../services/socket.service";
import { UserService } from "../../services/user.service";

class Message {
    name: string | undefined;
    message: string | undefined;
}

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.scss']
})
export class ChatBotComponent implements OnInit, OnDestroy {

    public messageArray: Message[] = [];
    public message = ""

    public users: User[] = [];
    
    constructor(private _socketService: SocketService,
                private _userService: UserService) { }
    
    ngOnInit(): void {
        console.log("chatbot init");
        this.getAllUsers();
        this._socketService.receivedReply().subscribe(data => {
            this.messageArray.push({ name:'bot', message: data.outputMessage });
        });
    }
    ngOnDestroy(): void {
        console.log("chatbot destroy");
    }

    sendMessage(){
        const data = { message: this.message };
        this._socketService.sendMessage(data);
        this.messageArray.push({ name: 'you', message: this.message });
        this.message = '';
    }

    getAllUsers() {
        this._userService.getAllUsers().then(response => {
            console.log(response);
        });
    }

}