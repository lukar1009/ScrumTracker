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
const push_notifications_service_1 = __importDefault(require("../services/push-notifications.service"));
class PushNotificationsController {
    addSubscription(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield push_notifications_service_1.default.addSubscription(resource);
        });
    }
    listSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield push_notifications_service_1.default.listSubscriptions();
        });
    }
}
exports.default = new PushNotificationsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC1ub3RpZmljYXRpb25zLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wdXNoLW5vdGlmaWNhdGlvbnMvY29udHJvbGxlcnMvcHVzaC1ub3RpZmljYXRpb25zLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBOEU7QUFFOUUsTUFBTSwyQkFBMkI7SUFDdkIsZUFBZSxDQUFDLFFBQWE7O1lBQy9CLE9BQU8sTUFBTSxvQ0FBd0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUNuQixPQUFPLE1BQU0sb0NBQXdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5RCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksMkJBQTJCLEVBQUUsQ0FBQyJ9