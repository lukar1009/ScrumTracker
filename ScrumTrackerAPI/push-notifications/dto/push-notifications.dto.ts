import { SubDto } from "./sub.dto";

export class PushNotificationsDto {
    id: number | undefined;
    userId: number | undefined;
    sub: SubDto | undefined;
}