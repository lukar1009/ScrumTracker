import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/core/models/user";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    async getAllUsers(): Promise<User> {
        let url = environment.apiUrl + "/users";
        return await this.http.get<User>(url).toPromise();
    }
}