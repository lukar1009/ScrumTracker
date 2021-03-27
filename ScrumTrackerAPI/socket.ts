import SocketIO from 'socket.io';
import { trigger, reply, alternative } from './chatbot-data';

function proccessMessage(input: any) {
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
    const match = compare(trigger, reply, text)
    if (match) {
      output = match;
    } else {
      output = alternative[Math.floor(Math.random() * alternative.length)];
    }
    return output
}
  
function compare(triggerArray: any, replyArray: any, string: any) {
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

export function setSocketInstance (server: any) {
    const io = SocketIO(server);
    io.on('connection', (socket) => {
        socket.on('message', (data) => {
            const output = proccessMessage(data.message);
            const replyData = {
                outputMessage : output
            }
            socket.emit('reply', replyData);
        });
    });
};
