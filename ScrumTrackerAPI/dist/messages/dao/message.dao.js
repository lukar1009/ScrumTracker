"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
const message_dto_1 = require("../dto/message.dto");
class MessageDao {
    constructor() { }
    getAllConversationsForUser(initiatingUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query(`select * from message where InitiatingUserId = ${initiatingUserId}`);
            return this.mapMessagesResponse(result[0]);
        });
    }
    getAllMessagesForConversation(userId, otherUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query(`select * from message where FromUserId in (${userId}, ${otherUserId}) and ToUserId in (${userId}, ${otherUserId})`);
            return this.mapMessagesResponse(result[0]);
        });
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute(`insert into message set Title = '${message.title}', Content = '${message.content}', FromUserId = ${message.fromUserId}, ToUserId = ${message.toUserId}, IsReadMessage = '${message.isReadMessage}', IsDeletedMessage = '${message.isDeletedMessage}', InitiatingUserId = ${message.initiatingUserId}`);
            const resID = conn.query(`select ID from message order by ID desc limit 1`).then(data => {
                let res = this.mapMessagesResponse(data[0]);
                let id = res[0].id != undefined ? res[0].id : 0;
                message.id = id;
                return message;
            });
        });
    }
    changeMessageStatus(messageId, otherUserId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute(`update message set IsReadMessage = '${status}' where InitiatingUserId = ${messageId} and ToUserId = ${otherUserId}`);
            return `Message updated!`;
        });
    }
    deleteConversation(initiatingUserId, otherUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute(`delete from message where InitiatingUserId = ${initiatingUserId} and (FromUserId = ${otherUserId} or ToUserId = ${otherUserId})`);
            return `Conversation deleted!`;
        });
    }
    deleteMessage(messageId, initiatingUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute(`delete from message where InitiatingUserId = ${initiatingUserId} and ID = ${messageId}`);
            return `Message deleted!`;
        });
    }
    checkForNewMessages(initiatingUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query(`select * from messages where InitiatingUserId = ${initiatingUserId} and IsReadMessage = 'N'`);
            return this.mapMessagesResponse(result[0]);
        });
    }
    mapMessagesResponse(messages) {
        let messagesArray = [];
        for (let i = 0; i < messages.length; i++) {
            messagesArray.push(this.populateMessage(messages[i]));
        }
        return messagesArray;
    }
    populateMessage(messageData) {
        let message = new message_dto_1.MessageDto();
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
exports.default = new MessageDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9tZXNzYWdlcy9kYW8vbWVzc2FnZS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvREFBZ0Q7QUFDaEQsb0RBQWdEO0FBRWhELE1BQU0sVUFBVTtJQUNaLGdCQUFnQixDQUFDO0lBRVgsMEJBQTBCLENBQUMsZ0JBQXdCOztZQUNyRCxNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsa0RBQWtELGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN0RyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxNQUFjLEVBQUUsV0FBbUI7O1lBQ25FLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sRUFBRSxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsTUFBTSxLQUFLLFdBQVcsc0JBQXNCLE1BQU0sS0FBSyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JKLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxPQUFZOztZQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsb0NBQW9DLE9BQU8sQ0FBQyxLQUFLLGlCQUFpQixPQUFPLENBQUMsT0FBTyxtQkFBbUIsT0FBTyxDQUFDLFVBQVUsZ0JBQWdCLE9BQU8sQ0FBQyxRQUFRLHNCQUFzQixPQUFPLENBQUMsYUFBYSwwQkFBMEIsT0FBTyxDQUFDLGdC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