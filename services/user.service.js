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
var ErrorHandler = require('../services/errorHandler.service');
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //todo fix user type
    UserService.prototype.register = function (user) {
        //todo validate user data
        //todo register user
        //todo use transactions ?
        return UserRepository
            .add(user)
            .then(function () {
            return user;
        })
            .catch(function (err) {
            return ErrorHandler.error(err);
        });
        //todo add log of registered user
    };
    return UserService;
}(base_service_1.BaseService));
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map