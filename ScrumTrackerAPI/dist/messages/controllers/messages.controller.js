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
            const data = yield messages_service_1.default.sendMessage(req.body);
            res.status(200).send(data);
        });
    }
    changeMessageStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield messages_service_1.default.changeMessageStatus(+req.params.messageId, +req.params.otherUserId, req.params.status);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzL2NvbnRyb2xsZXJzL21lc3NhZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSxvRkFBMkQ7QUFHM0QsTUFBTSxrQkFBa0I7SUFDZCwwQkFBMEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RSxNQUFNLGFBQWEsR0FBRyxNQUFNLDBCQUFlLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssNkJBQTZCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0UsTUFBTSxRQUFRLEdBQUcsTUFBTSwwQkFBZSxDQUFDLDZCQUE2QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLElBQUksR0FBRyxNQUFNLDBCQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFrQixDQUFDLENBQUM7WUFDdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSwwQkFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDaEUsTUFBTSxNQUFNLEdBQUcsTUFBTSwwQkFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0csT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsTUFBTSxNQUFNLEdBQUcsTUFBTSwwQkFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hHLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSwwQkFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGtCQUFrQixFQUFFLENBQUMifQ==