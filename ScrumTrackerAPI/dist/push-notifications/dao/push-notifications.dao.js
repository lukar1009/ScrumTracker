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
const keys_dto_1 = require("../dto/keys.dto");
const push_notifications_dto_1 = require("../dto/push-notifications.dto");
const sub_dto_1 = require("../dto/sub.dto");
class PushNotificationsDao {
    constructor() { }
    addSubscription(sub) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            yield conn.execute('insert into push_notification_data set UserID = ?, EndPoint = ?, P256dh = ?, Auth = ?', [sub.userId, (_a = sub.sub) === null || _a === void 0 ? void 0 : _a.endpoint, (_c = (_b = sub.sub) === null || _b === void 0 ? void 0 : _b.keys) === null || _c === void 0 ? void 0 : _c.p256dh, (_e = (_d = sub.sub) === null || _d === void 0 ? void 0 : _d.keys) === null || _e === void 0 ? void 0 : _e.auth]);
            return sub;
        });
    }
    listSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const result = yield conn.query('select * from push_notification_data');
            let res = this.mapSubscriptions(result[0]);
            return res;
        });
    }
    mapSubscriptions(data) {
        let pnArray = [];
        for (let i = 0; i < data.length; i++) {
            pnArray.push(this.populateSubscription(data[i]));
        }
        return pnArray;
    }
    populateSubscription(data) {
        let res = new push_notifications_dto_1.PushNotificationsDto();
        res.id = data['ID'];
        res.userId = data['UserID'];
        res.sub = new sub_dto_1.SubDto();
        res.sub.endpoint = data['EndPoint'];
        res.sub.expirationTime = null;
        res.sub.keys = new keys_dto_1.KeysDto();
        res.sub.keys.auth = data['Auth'];
        res.sub.keys.p256dh = data['P256dh'];
        return res;
    }
}
exports.default = new PushNotificationsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC1ub3RpZmljYXRpb25zLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1c2gtbm90aWZpY2F0aW9ucy9kYW8vcHVzaC1ub3RpZmljYXRpb25zLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9EQUFnRDtBQUNoRCw4Q0FBMEM7QUFDMUMsMEVBQXFFO0FBQ3JFLDRDQUF3QztBQUV4QyxNQUFNLG9CQUFvQjtJQUN0QixnQkFBZ0IsQ0FBQztJQUVYLGVBQWUsQ0FBQyxHQUF5Qjs7O1lBQzNDLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1RkFBdUYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBQSxHQUFHLENBQUMsR0FBRywwQ0FBRSxRQUFRLEVBQUUsTUFBQSxNQUFBLEdBQUcsQ0FBQyxHQUFHLDBDQUFFLElBQUksMENBQUUsTUFBTSxFQUFFLE1BQUEsTUFBQSxHQUFHLENBQUMsR0FBRywwQ0FBRSxJQUFJLDBDQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekwsT0FBTyxHQUFHLENBQUM7O0tBQ2Q7SUFFSyxpQkFBaUI7O1lBQ25CLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sRUFBRSxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBQ3hFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVPLGdCQUFnQixDQUFDLElBQVM7UUFDOUIsSUFBSSxPQUFPLEdBQTJCLEVBQUUsQ0FBQztRQUN6QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLG9CQUFvQixDQUFDLElBQVM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSw2Q0FBb0IsRUFBRSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFPLEVBQUUsQ0FBQztRQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLG9CQUFvQixFQUFFLENBQUMifQ==