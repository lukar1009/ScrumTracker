import { connect } from "../../config/database";
import { KeysDto } from "../dto/keys.dto";
import { PushNotificationsDto } from "../dto/push-notifications.dto";
import { SubDto } from "../dto/sub.dto";

class PushNotificationsDao {
    constructor() { }

    async addSubscription(sub: PushNotificationsDto) {
        const conn = await connect();
        await conn.execute('insert into push_notification_data set UserID = ?, EndPoint = ?, P256dh = ?, Auth = ?', [sub.userId, sub.sub?.endpoint, sub.sub?.keys?.p256dh, sub.sub?.keys?.auth]);
        return sub;
    }

    async listSubscriptions() {
        const conn = await connect();
        const result = await conn.query('select * from push_notification_data');
        let res = this.mapSubscriptions(result[0]);
        return res;
    }

    private mapSubscriptions(data: any) {
        let pnArray: PushNotificationsDto[] = [];
        for(let i = 0; i < data.length; i++) {
            pnArray.push(this.populateSubscription(data[i]));
        }
        return pnArray;
    }

    private populateSubscription(data: any) {
        let res = new PushNotificationsDto();
        res.id = data['ID'];
        res.userId = data['UserID'];
        res.sub = new SubDto();
        res.sub.endpoint = data['EndPoint'];
        res.sub.expirationTime = null;
        res.sub.keys = new KeysDto();
        res.sub.keys.auth = data['Auth'];
        res.sub.keys.p256dh = data['P256dh'];
        return res;
    }
}

export default new PushNotificationsDao();