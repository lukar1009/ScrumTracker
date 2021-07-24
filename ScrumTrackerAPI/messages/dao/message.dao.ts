import { connect } from '../../config/database';
import { MessageDto } from '../dto/message.dto';

class MessageDao {
    constructor() { }

    async getAllConversationsForUser(initiatingUserId: number) {
        const conn = await connect();
        const result = await conn.query(`select * from message where InitiatingUserId = ${initiatingUserId}`);
        return this.mapMessagesResponse(result[0]);
    }

    async getAllMessagesForConversation(userId: number, otherUserId: number) {
        const conn = await connect();
        const result = await conn.query(`select * from message where FromUserId in (${userId}, ${otherUserId}) and ToUserId in (${userId}, ${otherUserId}) and InitiatingUserId = ${userId}`);
        return this.mapMessagesResponse(result[0]);
    }

    async sendMessage(message: MessageDto) {
        const conn = await connect();
        await conn.execute(`insert into message set Title = '${message.title}', Content = '${message.content}', FromUserId = ${message.fromUserId}, ToUserId = ${message.toUserId}, IsReadMessage = '${message.isReadMessage}', IsDeletedMessage = '${message.isDeletedMessage}', InitiatingUserId = ${message.initiatingUserId}`);
        const resID = conn.query(`select ID from message order by ID desc limit 1`).then(data => {
            console.log("resId: ", resID);
            let res = this.mapMessagesResponse(data[0]);
            console.log("res: ", res);
            let id = res[0].id != undefined ? res[0].id : 0;
            message.id = id;
            console.log("message: ", message);
            return message;
        });
    }

    async changeMessageStatus(messageId: number, status: string) {
        const conn = await connect();
        await conn.execute(`update message set IsReadMessage = ${status} where InitiatingUserId = ${messageId}`);
        return `Message updated!`;
    }

    
    async deleteConversation(initiatingUserId: number, otherUserId: number) {
        const conn = await connect();
        await conn.execute(`delete from message where InitiatingUserId = ${initiatingUserId} and (FromUserId = ${otherUserId} or ToUserId = ${otherUserId})`);
        return `Conversation deleted!`;
    }

    async deleteMessage(messageId: number, initiatingUserId: number) {
        const conn = await connect();
        await conn.execute(`delete from message where InitiatingUserId = ${initiatingUserId} and ID = ${messageId}`);
        return `Message deleted!`;
    }

    async checkForNewMessages(initiatingUserId: number) {
        const conn = await connect();
        const result = await conn.query(`select * from messages where InitiatingUserId = ${initiatingUserId} and IsReadMessage = 'N'`);
        return this.mapMessagesResponse(result[0]);
    }

    private mapMessagesResponse(messages: any) {
        let messagesArray: MessageDto[] = [];
        for(let i = 0; i < messages.length; i++) {
            messagesArray.push(this.populateMessage(messages[i]));
        }
        return messagesArray;
    }

    private populateMessage(messageData: any) {
        let message = new MessageDto();
        message.id = +messageData["ID"];
        message.title = messageData["Title"];
        message.content = messageData["Content"];
        message.fromUserId = messageData["FromUserId"];
        message.toUserId = messageData["ToUserId"];
        message.isReadMessage = messageData["IsReadMessage"];
        message.isDeletedMessage = messageData["IsDeletedMessage"];
        message.initiatingUserId = messageData["InitiatingUserId"];
        return message;
    }
}

export default new MessageDao();