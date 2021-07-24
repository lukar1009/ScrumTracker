"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const messages_controller_1 = __importDefault(require("./controllers/messages.controller"));
const messages_middleware_1 = __importDefault(require("./middleware/messages.middleware"));
class MessagesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'MessagesRoutes');
    }
    configureRoutes() {
        this.app.param(`initiatingUserId`, messages_middleware_1.default.extractInitiatingUserIdParam);
        this.app.route('/messages/getAllConversations/:initiatingUserId')
            .get(messages_controller_1.default.getAllConversationsForUser);
        this.app.param(`userId`, messages_middleware_1.default.extractUserIdParam);
        this.app.param(`otherUserId`, messages_middleware_1.default.extractOtherUserIdParam);
        this.app.route('/messages/getAllMessagesForConversation/:userId/:otherUserId')
            .get(messages_controller_1.default.getAllMessagesForConversation);
        this.app.route('/messages/sendMessage')
            .post(messages_controller_1.default.sendMessage);
        this.app.param(`messageId`, messages_middleware_1.default.extractMessageIdParam);
        this.app.param(`status`, messages_middleware_1.default.extractStatusParam);
        this.app.route('/messages/changeMessageStatus/:messageId/:status')
            .put(messages_controller_1.default.changeMessageStatus);
        this.app.param(`initiatingUserId`, messages_middleware_1.default.extractInitiatingUserIdParam);
        this.app.param(`otherUserId`, messages_middleware_1.default.extractOtherUserIdParam);
        this.app.route('/messages/deleteConversation/:initiatingUserId/:otherUserId')
            .delete(messages_controller_1.default.deleteConversation);
        this.app.param(`messageId`, messages_middleware_1.default.extractMessageIdParam);
        this.app.param(`initiatingUserId`, messages_middleware_1.default.extractInitiatingUserIdParam);
        this.app.route('/messages/deleteMessage/:messageId/:initiatingUserId')
            .delete(messages_controller_1.default.deleteMessage);
        this.app.param(`initiatingUserId`, messages_middleware_1.default.extractInitiatingUserIdParam);
        this.app.route('/messages/checkForNewMessages/:initiatingUserId')
            .get(messages_controller_1.default.checkForNewMessages);
        return this.app;
    }
}
exports.MessagesRoutes = MessagesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lc3NhZ2VzL21lc3NhZ2VzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLDRGQUFtRTtBQUNuRSwyRkFBa0U7QUFFbEUsTUFBYSxjQUFlLFNBQVEseUNBQWtCO0lBQ2xELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsNkJBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQzthQUM1RCxHQUFHLENBQUMsNkJBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsNkJBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsNkJBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQzthQUN6RSxHQUFHLENBQUMsNkJBQWtCLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUUxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzthQUNsQyxJQUFJLENBQUMsNkJBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLDZCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDZCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUM7YUFDN0QsR0FBRyxDQUFDLDZCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFFaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsNkJBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsNkJBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQzthQUN4RSxNQUFNLENBQUMsNkJBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsNkJBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSw2QkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDO2FBQ2pFLE1BQU0sQ0FBQyw2QkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUU3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSw2QkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDO2FBQzVELEdBQUcsQ0FBQyw2QkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBRWhELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF2Q0Qsd0NBdUNDIn0=