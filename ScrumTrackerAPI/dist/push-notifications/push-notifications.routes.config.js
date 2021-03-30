"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const push_notifications_controller_1 = __importDefault(require("./controllers/push-notifications.controller"));
const webpush = require('web-push');
class PushNotificationsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PushNotificationsRoutes');
    }
    configureRoutes() {
        this.app.post('/subscribe', (req, res) => {
            //struktura requesta
            // {
            //     user: { id: 1, name: 'luka' },
            //     sub: {
            //       endpoint: 'https://fcm.googleapis.com/fcm/send/faJIdHiIWn8:APA91bHCkDohboVEgEU9lDF1HB78b9XdzINIepl8AY7I5h3bfc6IWOzRPPS8yhQrpJ_f50DMy-aLFHuVoQntLvfODMo7rYNCm-p_DRKy1Yds97J-0yxUhv3jSiAkX4ZM1Fe_hI0tGyjq',
            //       expirationTime: null,
            //       keys: {
            //         p256dh: 'BLxNfo3IIKknMRnDjvvTuZyHNIiFdZG6nNIb_u4OCwyG4fexJJP90JRttb_ZqAuXHeGxXSOZEsuZOAs_Cgjp8NE',
            //         auth: 'VAw3FWNeBqK9p_jp9Mpv-g'
            //       }
            //     }
            //   }
            console.log(req.body);
            push_notifications_controller_1.default.addSubscription(req.body).then(result => {
                res.status(200).send(result);
            });
        });
        this.app.post('/message', (req, res) => {
            res.set('Content-Type', 'application/json');
            //generisati novi public i private key -> web-push generate-vapid-keys --json
            webpush.setVapidDetails('mailto:example@yourdomain.org', "BDk__m-1DSIAYrLX4iY7cYW1HM0KIRDyhX0bLTJudpvnJGI_Us2SIWfnBZb5mpJ4aHju6JeKs53CDe5j1qBT7wM", "mJKcumaC85pJ7Fz-8QordojffcdWkDgyo0w4dU6PorQ");
            let subscriptions = [];
            push_notifications_controller_1.default.listSubscriptions().then(result => {
                var _a, _b, _c, _d, _e;
                subscriptions = result;
                let payload = JSON.stringify({
                    "notification": {
                        "title": "Push Notification",
                        "body": `Notification sent!!!`,
                        "icon": "https://yt3.ggpht.com/a-/AAuE7mCxr-4W53FAxBRcKR0iDk_vPCSAmW-QKFGaFA=s88-mo-c-c0xffffffff-rj-k-no"
                    }
                });
                for (let i = 0; i < subscriptions.length; i++) {
                    // let sub: PushSubscription = new PushSubscription();
                    //u odnosu na userId iz req treba razluciti da li se salje notifikacija (porediti ga sa subscriptions[i].userId)
                    //u req bi trebalo napakovati sa angulara niz userId-jeva kojima se salje notifikacija
                    let sub = {
                        endpoint: (_a = subscriptions[i].sub) === null || _a === void 0 ? void 0 : _a.endpoint,
                        expirationTime: null,
                        keys: {
                            p256dh: (_c = (_b = subscriptions[i].sub) === null || _b === void 0 ? void 0 : _b.keys) === null || _c === void 0 ? void 0 : _c.p256dh,
                            auth: (_e = (_d = subscriptions[i].sub) === null || _d === void 0 ? void 0 : _d.keys) === null || _e === void 0 ? void 0 : _e.auth
                        }
                    };
                    Promise.resolve(webpush.sendNotification(sub, payload))
                        .then(() => res.status(200).json({
                        message: 'Notification sent'
                    }))
                        .catch(err => {
                        console.error(err);
                        res.sendStatus(500);
                    });
                }
            });
        });
        return this.app;
    }
}
exports.PushNotificationsRoutes = PushNotificationsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC1ub3RpZmljYXRpb25zLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wdXNoLW5vdGlmaWNhdGlvbnMvcHVzaC1ub3RpZmljYXRpb25zLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLGdIQUFzRjtBQUd0RixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFcEMsTUFBYSx1QkFBd0IsU0FBUSx5Q0FBa0I7SUFDM0QsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckMsb0JBQW9CO1lBQ3BCLElBQUk7WUFDSixxQ0FBcUM7WUFDckMsYUFBYTtZQUNiLGtOQUFrTjtZQUNsTiw4QkFBOEI7WUFDOUIsZ0JBQWdCO1lBQ2hCLDZHQUE2RztZQUM3Ryx5Q0FBeUM7WUFDekMsVUFBVTtZQUNWLFFBQVE7WUFDUixNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsdUNBQTJCLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUU1Qyw2RUFBNkU7WUFDN0UsT0FBTyxDQUFDLGVBQWUsQ0FDbkIsK0JBQStCLEVBQy9CLHlGQUF5RixFQUN6Riw2Q0FBNkMsQ0FDaEQsQ0FBQztZQUVGLElBQUksYUFBYSxHQUEyQixFQUFFLENBQUM7WUFDL0MsdUNBQTJCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUMxRCxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUN6QixjQUFjLEVBQUU7d0JBQ2QsT0FBTyxFQUFFLG1CQUFtQjt3QkFDNUIsTUFBTSxFQUFFLHNCQUFzQjt3QkFDOUIsTUFBTSxFQUFFLGtHQUFrRztxQkFDM0c7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVMLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxzREFBc0Q7b0JBQ3RELGdIQUFnSDtvQkFDaEgsc0ZBQXNGO29CQUN0RixJQUFJLEdBQUcsR0FBRzt3QkFDTixRQUFRLEVBQUUsTUFBQSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRywwQ0FBRSxRQUFRO3dCQUN4QyxjQUFjLEVBQUUsSUFBSTt3QkFDcEIsSUFBSSxFQUFFOzRCQUNGLE1BQU0sRUFBRSxNQUFBLE1BQUEsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsMENBQUUsSUFBSSwwQ0FBRSxNQUFNOzRCQUMxQyxJQUFJLEVBQUUsTUFBQSxNQUFBLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLDBDQUFFLElBQUksMENBQUUsSUFBSTt5QkFDekM7cUJBQ0osQ0FBQTtvQkFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQ2xELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLG1CQUFtQjtxQkFDL0IsQ0FBQyxDQUFDO3lCQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBM0VELDBEQTJFQyJ9