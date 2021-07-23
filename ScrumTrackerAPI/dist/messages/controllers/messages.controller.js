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
const messages_service_1 = __importDefault(require("../services/messages.service"));
class MessagesController {
    getAllConversationsForUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conversations = yield messages_service_1.default.getAllConversationsForUser(+req.params.initiatingUserId);
            res.status(200).send(conversations);
        });
    }
    getAllMessagesForConversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const messages = yield messages_service_1.default.getAllMessagesForConversation(+req.params.userId, +req.params.otherUserId);
            res.status(200).send(messages);
        });
    }
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield messages_service_1.default.sendMessage(req.body);
            res.status(200).send(message);
        });
    }
    changeMessageStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield messages_service_1.default.changeMessageStatus(+req.params.messageId, req.params.status);
            return res.status(200).send(result);
        });
    }
    deleteConversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield messages_service_1.default.deleteConversation(+req.params.initiatingUserId, +req.params.otherUserId);
            return res.status(200).send(result);
        });
    }
    deleteMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield messages_service_1.default.deleteMessage(+req.params.messageId, +req.params.initiatingUserId);
            return res.status(200).send(result);
        });
    }
    checkForNewMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield messages_service_1.default.checkForNewMessages(+req.params.initiatingUserId);
            return res.status(200).send(result);
        });
    }
}
exports.default = new MessagesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzL2NvbnRyb2xsZXJzL21lc3NhZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSxvRkFBMkQ7QUFHM0QsTUFBTSxrQkFBa0I7SUFDZCwwQkFBMEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RSxNQUFNLGFBQWEsR0FBRyxNQUFNLDBCQUFlLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssNkJBQTZCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0UsTUFBTSxRQUFRLEdBQUcsTUFBTSwwQkFBZSxDQUFDLDZCQUE2QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLE9BQU8sR0FBRyxNQUFNLDBCQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFrQixDQUFDLENBQUM7WUFDMUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSwwQkFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ2hFLE1BQU0sTUFBTSxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9HLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sTUFBTSxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN4RyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ2pFLE1BQU0sTUFBTSxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIn0=