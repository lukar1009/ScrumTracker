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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
class UsersMiddleware {
    validateRequiredUserBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.email && req.body.password && req.body.name) {
                next();
            }
            else {
                res.status(400).send({ error: `Missing required fields for new user.` });
            }
        });
    }
    validateSameEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user) {
                res.status(400).send({ error: `User email is already in use.` });
            }
            else {
                next();
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(+req.params.userId);
            if (user) {
                next();
            }
            else {
                res.status(404).send({ error: `User not found.` });
            }
        });
    }
    extractUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.userId;
            next();
        });
    }
    extractRoleId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.roleId;
            next();
        });
    }
    validateRequeiredRoleBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.name) {
                next();
            }
            else {
                res.status(400).send({ error: `Missing required fields for new role.` });
            }
        });
    }
    validateRoleExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield users_service_1.default.getRoleByName(req.params.name);
            if (role) {
                res.status(400).send({ error: `Role already exists.` });
            }
            else {
                next();
            }
        });
    }
}
exports.default = new UsersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUFvRDtBQUVwRCxNQUFNLGVBQWU7SUFDWCw4QkFBOEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3hHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDbEUsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSx1Q0FBdUMsRUFBQyxDQUFDLENBQUM7YUFDMUU7UUFDTCxDQUFDO0tBQUE7SUFFSyw0QkFBNEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3RHLE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxJQUFJLElBQUksRUFBRTtnQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwrQkFBK0IsRUFBQyxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDNUYsTUFBTSxJQUFJLEdBQUcsTUFBTSx1QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxDQUFDLENBQUM7YUFDcEQ7UUFDTCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUN2RixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3ZGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0lBRUssK0JBQStCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUN6RyxJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsdUNBQXVDLEVBQUMsQ0FBQyxDQUFDO2FBQzFFO1FBQ0wsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUM1RixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUQsSUFBRyxJQUFJLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNILElBQUksRUFBRSxDQUFDO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==