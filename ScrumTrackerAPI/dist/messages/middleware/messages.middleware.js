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
class MessagesMiddleware {
    extractUserIdParam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.userId = req.params.userId;
            next();
        });
    }
    extractOtherUserIdParam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.otherUserId = req.params.otherUserId;
            next();
        });
    }
    extractInitiatingUserIdParam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.initiatingUserId = req.params.initiatingUserId;
            next();
        });
    }
    extractMessageIdParam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.messageId = req.params.messageId;
            next();
        });
    }
    extractStatusParam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.status = req.params.status;
            next();
        });
    }
}
exports.default = new MessagesMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzL21pZGRsZXdhcmUvbWVzc2FnZXMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sa0JBQWtCO0lBRWQsa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUM1RixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDakcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDOUMsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDO0tBQUE7SUFFSyw0QkFBNEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3RHLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDL0YsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDMUMsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGtCQUFrQixFQUFFLENBQUMifQ==