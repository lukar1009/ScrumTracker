import { User } from "../user";

export class Conversation {
    initiatingUserId: number | undefined;
    contactUser: User | undefined;
    hasNewMessages: boolean | undefined;
}