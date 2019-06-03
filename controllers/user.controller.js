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
var UserController = /** @class */ (function () {
    function UserController() {
        this.someUserData = [
            new user_model_1.default('mehdi', 'maghrooni', 'maghrooni@gmail.com', 989898),
            new user_model_1.default('meiti', 'maghrooni', 'maghrooni1@gmail.com', 989898),
            new user_model_1.default('mehti', 'maghrooni', 'maghrooni2@gmail.com', 989898),
        ];
    }
    UserController.prototype.getAll = function () {
        return this.someUserData.filter(function (users) {
            delete users.password;
            return true;
        });
    };
    UserController.prototype.getById = function (id) {
        //todo return found user with id
        console.log("will find user with this ID " + id);
    };
    UserController.prototype.getByUsername = function (username) {
        //todo return found user with username
        console.log("will find user with this Username " + username);
    };
    UserController.prototype.add = function (user) {
        console.log(user);
        //todo validation on user service
        var newUser = new user_model_1.default(user.name, user.username, user.email, user.password);
        return newUser;
    };
    UserController.prototype.update = function (id, user) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log("user data for ID " + id + " will be updated !");
    };
    UserController.prototype.delete = function (id) {
        //todo remove user
        console.log("user with ID " + id + " will be removed !");
    };
    __decorate([
        routing_controllers_1.Get('/users')
    ], UserController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get('/users/:id'),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('id'))
    ], UserController.prototype, "getById", null);
    __decorate([
        routing_controllers_1.Get('/users/:username'),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('username'))
    ], UserController.prototype, "getByUsername", null);
    __decorate([
        routing_controllers_1.Post('/users'),
        __param(0, routing_controllers_1.Body())
    ], UserController.prototype, "add", null);
    __decorate([
        routing_controllers_1.Put('/users/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
    ], UserController.prototype, "update", null);
    __decorate([
        routing_controllers_1.Delete('/users/:id'),
        __param(0, routing_controllers_1.Param('id'))
    ], UserController.prototype, "delete", null);
    UserController = __decorate([
        routing_controllers_1.JsonController()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map