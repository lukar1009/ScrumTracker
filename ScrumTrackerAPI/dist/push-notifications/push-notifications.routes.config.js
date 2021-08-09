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
        /**
         *  struktura requesta
         *   {
         *      user: { id: 1, name: 'luka' },
         *      sub: {
         *        endpoint: 'https://fcm.googleapis.com/fcm/send/faJIdHiIWn8:APA91bHCkDohboVEgEU9lDF1HB78b9XdzINIepl8AY7I5h3bfc6IWOzRPPS8yhQrpJ_f50DMy-aLFHuVoQntLvfODMo7rYNCm-p_DRKy1Yds97J-0yxUhv3jSiAkX4ZM1Fe_hI0tGyjq',
         *        expirationTime: null,
         *        keys: {
         *          p256dh: 'BLxNfo3IIKknMRnDjvvTuZyHNIiFdZG6nNIb_u4OCwyG4fexJJP90JRttb_ZqAuXHeGxXSOZEsuZOAs_Cgjp8NE',
         *          auth: 'VAw3FWNeBqK9p_jp9Mpv-g'
         *        }
         *      }
         *  }
         */
        this.app.post('/subscribe', (req, res) => {
            push_notifications_controller_1.default.addSubscription(req.body).then(result => {
                res.status(200).send(result);
            });
        });
        this.app.post('/message', (req, res) => {
            res.set('Content-Type', 'application/json');
            console.log(req.body);
            //generisati novi public i private key -> web-push generate-vapid-keys --json
            webpush.setVapidDetails('mailto:example@yourdomain.org', "BDk__m-1DSIAYrLX4iY7cYW1HM0KIRDyhX0bLTJudpvnJGI_Us2SIWfnBZb5mpJ4aHju6JeKs53CDe5j1qBT7wM", "mJKcumaC85pJ7Fz-8QordojffcdWkDgyo0w4dU6PorQ");
            let subscriptions = [];
            push_notifications_controller_1.default.listSubscriptions().then(result => {
                var _a, _b, _c, _d, _e;
                subscriptions = result;
                let payload = JSON.stringify({
                    "notification": {
                        "title": "Task Tracker PWA",
                        "body": `New task has been added!`,
                        "icon": "https://yt3.ggpht.com/a-/AAuE7mCxr-4W53FAxBRcKR0iDk_vPCSAmW-QKFGaFA=s88-mo-c-c0xffffffff-rj-k-no"
                    }
                });
                for (let i = 0; i < subscriptions.length; i++) {
                    //Deo za slanje notifikacija pojedinacnim korisnicima
                    // if(subscriptions[i].userId == req.body.userId 
                    //     || subscriptions[i].userId == req.body.developerId 
                    //     || subscriptions[i].userId == req.body.scrumMasterId) {
                    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC1ub3RpZmljYXRpb25zLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wdXNoLW5vdGlmaWNhdGlvbnMvcHVzaC1ub3RpZmljYXRpb25zLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLGdIQUFzRjtBQUd0RixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFcEMsTUFBYSx1QkFBd0IsU0FBUSx5Q0FBa0I7SUFDM0QsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELGVBQWU7UUFFWDs7Ozs7Ozs7Ozs7OztXQWFHO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3JDLHVDQUEyQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsNkVBQTZFO1lBQzdFLE9BQU8sQ0FBQyxlQUFlLENBQ25CLCtCQUErQixFQUMvQix5RkFBeUYsRUFDekYsNkNBQTZDLENBQ2hELENBQUM7WUFFRixJQUFJLGFBQWEsR0FBMkIsRUFBRSxDQUFDO1lBQy9DLHVDQUEyQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDMUQsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsY0FBYyxFQUFFO3dCQUNkLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLE1BQU0sRUFBRSwwQkFBMEI7d0JBQ2xDLE1BQU0sRUFBRSxrR0FBa0c7cUJBQzNHO2lCQUNGLENBQUMsQ0FBQztnQkFFTCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUMscURBQXFEO29CQUNyRCxpREFBaUQ7b0JBQ2pELDBEQUEwRDtvQkFDMUQsOERBQThEO29CQUU5RCxJQUFJO29CQUNKLElBQUksR0FBRyxHQUFHO3dCQUNOLFFBQVEsRUFBRSxNQUFBLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLDBDQUFFLFFBQVE7d0JBQ3hDLGNBQWMsRUFBRSxJQUFJO3dCQUNwQixJQUFJLEVBQUU7NEJBQ0YsTUFBTSxFQUFFLE1BQUEsTUFBQSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRywwQ0FBRSxJQUFJLDBDQUFFLE1BQU07NEJBQzFDLElBQUksRUFBRSxNQUFBLE1BQUEsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsMENBQUUsSUFBSSwwQ0FBRSxJQUFJO3lCQUN6QztxQkFDSixDQUFBO29CQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDbEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUM3QixPQUFPLEVBQUUsbUJBQW1CO3FCQUMvQixDQUFDLENBQUM7eUJBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25CLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2lCQUNOO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFoRkQsMERBZ0ZDIn0=