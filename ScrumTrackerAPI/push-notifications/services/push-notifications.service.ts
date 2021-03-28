import pushNotificationsDao from "../dao/push-notifications.dao";
import { KeysDto } from "../dto/keys.dto";
import { PushNotificationsDto } from "../dto/push-notifications.dto";
import { SubDto } from "../dto/sub.dto";

class PushNotificationsService {
    async addSubscription(resource: any) {
        let data = new PushNotificationsDto();
        data.userId = resource.userId;
        data.sub = new SubDto();
        data.sub.endpoint = resource.sub.endpoint;
        data.sub.expirationTime = null;
        data.sub.keys = new KeysDto();
        data.sub.keys.auth = resource.sub.keys.auth;
        data.sub.keys.p256dh = resource.sub.keys.p256dh;
        return pushNotificationsDao.addSubscription(data);
    }

    async listSubscriptions() {
        return pushNotificationsDao.listSubscriptions();
    }
}

export default new PushNotificationsService();