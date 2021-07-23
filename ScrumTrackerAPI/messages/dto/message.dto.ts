export class MessageDto {
    id: number | undefined;
    title: string | undefined;
    content: string | undefined;
    fromUserId: number | undefined;
    toUserId: number | undefined;
    isReadMessage: string | undefined;
    isDeletedMessage: string | undefined;
    initiatingUserId: number | undefined;
}