import { KeysDto } from "./keys.dto";

export class SubDto {
    endpoint: string | undefined;
    expirationTime: any | undefined;
    keys: KeysDto | undefined;
}