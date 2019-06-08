"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_config_1 = require("../config/user.config");
const UserService = require('../services/user.service');
class AuthMiddleware {
    use(request, response, next) {
        UserService
            .getByToken(request.header(user_config_1.default.auth.header))
            .then(doc => {
            return next();
        })
            .catch(err => {
            return next(err);
        });
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map