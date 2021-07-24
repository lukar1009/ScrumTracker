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
            const result = yield conn.query(`select * from message where FromUserId in (${userId}, ${otherUserId}) and ToUserId in (${userId}, ${otherUserId}) and InitiatingUserId = ${userId}`);
            return this.mapMessagesResponse(result[0]);
        });
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute(`insert into message set Title = '${message.title}', Content = '${message.content}', FromUserId = ${message.fromUserId}, ToUserId = ${message.toUserId}, IsReadMessage = '${message.isReadMessage}', IsDeletedMessage = '${message.isDeletedMessage}', InitiatingUserId = ${message.initiatingUserId}`);
            const resID = conn.query(`select ID from message order by ID desc limit 1`).then(data => {
                console.log("resId: ", resID);
                let res = this.mapMessagesResponse(data[0]);
                console.log("res: ", res);
                let id = res[0].id != undefined ? res[0].id : 0;
                message.id = id;
                console.log("message: ", message);
                return message;
            });
        });
    }
    changeMessageStatus(messageId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute(`update message set IsReadMessage = ${status} where InitiatingUserId = ${messageId}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9tZXNzYWdlcy9kYW8vbWVzc2FnZS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvREFBZ0Q7QUFDaEQsb0RBQWdEO0FBRWhELE1BQU0sVUFBVTtJQUNaLGdCQUFnQixDQUFDO0lBRVgsMEJBQTBCLENBQUMsZ0JBQXdCOztZQUNyRCxNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsa0RBQWtELGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN0RyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxNQUFjLEVBQUUsV0FBbUI7O1lBQ25FLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sRUFBRSxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsTUFBTSxLQUFLLFdBQVcsc0JBQXNCLE1BQU0sS0FBSyxXQUFXLDRCQUE0QixNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3RMLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxPQUFtQjs7WUFDakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxrQkFBTyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxPQUFPLENBQUMsS0FBSyxpQkFBaUIsT0FBTyxDQUFDLE9BQU8sbUJBQW1CLE9BQU8sQ0FBQyxVQUFVLGdCQUFnQixPQUFPLENBQUMsUUFBUSxzQkFBc0IsT0FBTyxDQUFDLGFBQWEsMEJBQTBC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