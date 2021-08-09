"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSocketInstance = void 0;
const socket_io_1 = __importDefault(require("socket.io"));
const chatbot_data_1 = require("./chatbot-data");
function proccessMessage(input) {
    let output;
    //Regularni izraz koji cisti sve nepotrebne karaktere iz unosa
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    // For example 'tell me a story' becomes 'tell me story'
    // Or 'i feel happy' -> 'happy'
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
    //Provera da li postoji triger koji se slaze sa dozvoljenim i sa odgovorom, ako postoji daje mu odgovor, a ako ne, onda daje neku od alternativa
    const match = compare(chatbot_data_1.trigger, chatbot_data_1.reply, text);
    if (match) {
        output = match;
    }
    else {
        output = chatbot_data_1.alternative[Math.floor(Math.random() * chatbot_data_1.alternative.length)];
    }
    return output;
}
function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == string) {
                let items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}
function setSocketInstance(server) {
    const io = socket_io_1.default(server);
    io.on('connection', (socket) => {
        socket.on('message', (data) => {
            const output = proccessMessage(data.message);
            const replyData = {
                outputMessage: output
            };
            socket.emit('reply', replyData);
        });
    });
}
exports.setSocketInstance = setSocketInstance;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc29ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBEQUFpQztBQUNqQyxpREFBNkQ7QUFFN0QsU0FBUyxlQUFlLENBQUMsS0FBVTtJQUMvQixJQUFJLE1BQU0sQ0FBQztJQUVYLDhEQUE4RDtJQUM5RCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUxRCx3REFBd0Q7SUFDeEQsK0JBQStCO0lBQy9CLElBQUksR0FBRyxJQUFJO1NBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7U0FDcEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7U0FDdkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7U0FDNUIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7U0FDdkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzQixnSkFBZ0o7SUFDaEosTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLHNCQUFPLEVBQUUsb0JBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQyxJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7U0FBTTtRQUNMLE1BQU0sR0FBRywwQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLDBCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN0RTtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2pCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxZQUFpQixFQUFFLFVBQWUsRUFBRSxNQUFXO0lBQzVELElBQUksSUFBSSxDQUFDO0lBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUNoQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDeEQ7U0FDRjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQWdCLGlCQUFpQixDQUFFLE1BQVc7SUFDMUMsTUFBTSxFQUFFLEdBQUcsbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUIsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxNQUFNLFNBQVMsR0FBRztnQkFDZCxhQUFhLEVBQUcsTUFBTTthQUN6QixDQUFBO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFYRCw4Q0FXQztBQUFBLENBQUMifQ==