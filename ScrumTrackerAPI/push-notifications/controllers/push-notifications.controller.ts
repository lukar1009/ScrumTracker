import pushNotificationsService from "../services/push-notifications.service";

class PushNotificationsController {
    async addSubscription(resource: any) {
        return await pushNotificationsService.addSubscription(resource);
    }

    async listSubscriptions() {
        return await pushNotificationsService.listSubscriptions();
    }
}

export default new PushNotificationsController();