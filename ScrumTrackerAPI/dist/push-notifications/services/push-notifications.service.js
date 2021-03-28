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
const push_notifications_dao_1 = __importDefault(require("../dao/push-notifications.dao"));
const keys_dto_1 = require("../dto/keys.dto");
const push_notifications_dto_1 = require("../dto/push-notifications.dto");
const sub_dto_1 = require("../dto/sub.dto");
class PushNotificationsService {
    addSubscription(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = new push_notifications_dto_1.PushNotificationsDto();
            data.userId = resource.userId;
            data.sub = new sub_dto_1.SubDto();
            data.sub.endpoint = resource.sub.endpoint;
            data.sub.expirationTime = null;
            data.sub.keys = new keys_dto_1.KeysDto();
            data.sub.keys.auth = resource.sub.keys.auth;
            data.sub.keys.p256dh = resource.sub.keys.p256dh;
            return push_notifications_dao_1.default.addSubscription(data);
        });
    }
    listSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            return push_notifications_dao_1.default.listSubscriptions();
        });
    }
}
exports.default = new PushNotificationsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC1ub3RpZmljYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wdXNoLW5vdGlmaWNhdGlvbnMvc2VydmljZXMvcHVzaC1ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRkFBaUU7QUFDakUsOENBQTBDO0FBQzFDLDBFQUFxRTtBQUNyRSw0Q0FBd0M7QUFFeEMsTUFBTSx3QkFBd0I7SUFDcEIsZUFBZSxDQUFDLFFBQWE7O1lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksNkNBQW9CLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBTyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hELE9BQU8sZ0NBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVLLGlCQUFpQjs7WUFDbkIsT0FBTyxnQ0FBb0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BELENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSx3QkFBd0IsRUFBRSxDQUFDIn0=