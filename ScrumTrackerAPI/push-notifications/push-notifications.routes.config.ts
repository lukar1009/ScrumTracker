import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import pushNotificationsController from "./controllers/push-notifications.controller";
import { PushNotificationsDto } from "./dto/push-notifications.dto";

const webpush = require('web-push');

export class PushNotificationsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PushNotificationsRoutes');
    }
    
    
    configureRoutes(): express.Application {
        
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
            pushNotificationsController.addSubscription(req.body).then(result => {
                res.status(200).send(result);
            });
        });

        this.app.post('/message', (req, res) => {
            res.set('Content-Type', 'application/json');

            //generisati novi public i private key -> web-push generate-vapid-keys --json
            webpush.setVapidDetails(
                'mailto:example@yourdomain.org',
                "BDk__m-1DSIAYrLX4iY7cYW1HM0KIRDyhX0bLTJudpvnJGI_Us2SIWfnBZb5mpJ4aHju6JeKs53CDe5j1qBT7wM", 
                "mJKcumaC85pJ7Fz-8QordojffcdWkDgyo0w4dU6PorQ"
            );

            let subscriptions: PushNotificationsDto[] = [];
            pushNotificationsController.listSubscriptions().then(result => {
                subscriptions = result;
                let payload = JSON.stringify({
                    "notification": {
                      "title": "Task Tracker PWA",
                      "body": `New task has been added!`,
                      "icon": "https://yt3.ggpht.com/a-/AAuE7mCxr-4W53FAxBRcKR0iDk_vPCSAmW-QKFGaFA=s88-mo-c-c0xffffffff-rj-k-no"
                    }
                  });
                
                for(let i = 0; i < subscriptions.length; i++) {
                    // let sub: PushSubscription = new PushSubscription();
                    //u odnosu na userId iz req treba razluciti da li se salje notifikacija (porediti ga sa subscriptions[i].userId)
                    //u req bi trebalo napakovati sa angulara niz userId-jeva kojima se salje notifikacija
                    let sub = {
                        endpoint: subscriptions[i].sub?.endpoint,
                        expirationTime: null,
                        keys: {
                            p256dh: subscriptions[i].sub?.keys?.p256dh,
                            auth: subscriptions[i].sub?.keys?.auth
                        }
                    }
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