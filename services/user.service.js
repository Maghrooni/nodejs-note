"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_service_1 = require("./base.service");
var UserRepository = require('../repositories/user.repository');
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super.call(this) || this;
        _this.repository = UserRepository;
        return _this;
    }
    //todo fix user type
    UserService.prototype.register = function (user) {
        var _this = this;
        //todo validate user data
        //todo register user
        //todo use transactions ?
        return this.repository
            .add(user)
            .then(function () {
            return user;
        })
            .catch(function (err) {
            return _this.errorHandler.error(err);
        });
        //todo add log of registered user
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return this.repository
            .getByUserPass(user.username, user.password)
            .then(function (found) {
            try {
                if (!found) {
                    //todo support multilingual messages
                    throw new Error('user not found');
                }
                //todo set session ?
                return found;
            }
            catch (e) {
                return _this.errorHandler.error(e);
            }
        })
            .catch(function (err) {
            return _this.errorHandler.error(err);
        });
    };
    return UserService;
}(base_service_1.BaseService));
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map