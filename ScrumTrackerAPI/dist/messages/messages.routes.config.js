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
        this.app.route('/messages/getAllConversations')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lc3NhZ2VzL21lc3NhZ2VzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLDRGQUFtRTtBQUNuRSwyRkFBa0U7QUFFbEUsTUFBYSxjQUFlLFNBQVEseUNBQWtCO0lBQ2xELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUM7YUFDMUMsR0FBRyxDQUFDLDZCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDZCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLDZCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUM7YUFDekUsR0FBRyxDQUFDLDZCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUE7UUFFMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7YUFDbEMsSUFBSSxDQUFDLDZCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSw2QkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSw2QkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDO2FBQzdELEdBQUcsQ0FBQyw2QkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBRWhELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLDZCQUFrQixDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLDZCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUM7YUFDeEUsTUFBTSxDQUFDLDZCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFFbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLDZCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsNkJBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQzthQUNqRSxNQUFNLENBQUMsNkJBQWtCLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsNkJBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQzthQUM1RCxHQUFHLENBQUMsNkJBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUVoRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBdENELHdDQXNDQyJ9