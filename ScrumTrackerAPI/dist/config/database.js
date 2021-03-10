"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'scrum_tracker_db'
        });
        return connection;
    });
}
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBRTVDLFNBQXNCLE9BQU87O1FBQ3pCLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQVUsQ0FBQztZQUNoQyxJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLGtCQUFrQjtTQUMvQixDQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFSRCwwQkFRQyJ9