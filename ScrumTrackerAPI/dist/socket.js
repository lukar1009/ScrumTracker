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
    //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    // For example 'tell me a story' becomes 'tell me story'
    // Or 'i feel happy' -> 'happy'
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
    // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
    const match = compare(chatbot_data_1.trigger, chatbot_data_1.reply, text);
    if (match) {
        output = match;
    }
    else if (text.match(/coronavirus/gi)) {
        output = chatbot_data_1.coronavirus[Math.floor(Math.random() * chatbot_data_1.coronavirus.length)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc29ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBEQUFpQztBQUNqQyxpREFBMEU7QUFFMUUsU0FBUyxlQUFlLENBQUMsS0FBVTtJQUMvQixJQUFJLE1BQU0sQ0FBQztJQUVYLGlIQUFpSDtJQUNqSCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUxRCx3REFBd0Q7SUFDeEQsK0JBQStCO0lBQy9CLElBQUksR0FBRyxJQUFJO1NBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7U0FDcEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7U0FDdkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7U0FDNUIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7U0FDdkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzQixpS0FBaUs7SUFDakssTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLHNCQUFPLEVBQUUsb0JBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQyxJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7U0FBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUU7UUFDdEMsTUFBTSxHQUFHLDBCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsMEJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3RFO1NBQU07UUFDTCxNQUFNLEdBQUcsMEJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRywwQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDdEU7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNqQixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsWUFBaUIsRUFBRSxVQUFlLEVBQUUsTUFBVztJQUM1RCxJQUFJLElBQUksQ0FBQztJQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDaEMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBRSxNQUFXO0lBQzFDLE1BQU0sRUFBRSxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMzQixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsTUFBTSxTQUFTLEdBQUc7Z0JBQ2QsYUFBYSxFQUFHLE1BQU07YUFDekIsQ0FBQTtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBWEQsOENBV0M7QUFBQSxDQUFDIn0=