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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_dao_1 = __importDefault(require("../dao/message.dao"));
class MessagesService {
    getAllConversationsForUser(initiatingUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.getAllConversationsForUser(initiatingUserId);
        });
    }
    getAllMessagesForConversation(userId, otherUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.getAllMessagesForConversation(userId, otherUserId);
        });
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.sendMessage(message);
        });
    }
    changeMessageStatus(messageId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.changeMessageStatus(messageId, status);
        });
    }
    deleteConversation(initiatingUserId, otherUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.deleteConversation(initiatingUserId, otherUserId);
        });
    }
    deleteMessage(messageId, initiatingUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.deleteMessage(messageId, initiatingUserId);
        });
    }
    checkForNewMessages(initiatingUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            return message_dao_1.default.checkForNewMessages(initiatingUserId);
        });
    }
}
exports.default = new MessagesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzL3NlcnZpY2VzL21lc3NhZ2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBNEM7QUFHNUMsTUFBTSxlQUFlO0lBRVgsMEJBQTBCLENBQUMsZ0JBQXdCOztZQUNyRCxPQUFPLHFCQUFVLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRSxDQUFDO0tBQUE7SUFFSyw2QkFBNkIsQ0FBQyxNQUFjLEVBQUUsV0FBbUI7O1lBQ25FLE9BQU8scUJBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE9BQW1COztZQUNqQyxPQUFPLHFCQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLFNBQWlCLEVBQUUsTUFBYzs7WUFDdkQsT0FBTyxxQkFBVSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxnQkFBd0IsRUFBRSxXQUFtQjs7WUFDbEUsT0FBTyxxQkFBVSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxTQUFpQixFQUFFLGdCQUF3Qjs7WUFDM0QsT0FBTyxxQkFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRSxDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxnQkFBd0I7O1lBQzlDLE9BQU8scUJBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVELENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9