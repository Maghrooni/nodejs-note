"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var user_model_1 = require("../models/user.model");
var userController = /** @class */ (function () {
    function userController() {
        console.log('user controller constructed');
        this.someUserData = [
            new user_model_1.default('mehdi', 'maghrooni', 'maghrooni@gmail.com', 989898),
            new user_model_1.default('meiti', 'maghrooni', 'maghrooni1@gmail.com', 989898),
            new user_model_1.default('mehti', 'maghrooni', 'maghrooni2@gmail.com', 989898),
        ];
    }
    userController.prototype.getAll = function () {
        return this.someUserData;
    };
    userController.prototype.getOne = function (id) {
        console.log("will find user with this ID " + id);
    };
    userController.prototype.add = function (user) {
        //todo validation on user service
        var newUser = new user_model_1.default(user.name, user.username, user.email, user.password);
        return newUser;
    };
    __decorate([
        routing_controllers_1.Get('/users')
    ], userController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get('/users/:id'),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('id'))
    ], userController.prototype, "getOne", null);
    __decorate([
        routing_controllers_1.Post('/users'),
        __param(0, routing_controllers_1.Body())
    ], userController.prototype, "add", null);
    userController = __decorate([
        routing_controllers_1.JsonController()
    ], userController);
    return userController;
}());
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map