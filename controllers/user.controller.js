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
        return this.someUserData.filter(function (users) {
            delete users.password;
            return true;
        });
    };
    userController.prototype.getById = function (id) {
        //todo return found user with id
        console.log("will find user with this ID " + id);
    };
    userController.prototype.getByUsername = function (username) {
        //todo return found user with username
        console.log("will find user with this Username " + username);
    };
    userController.prototype.add = function (user) {
        //todo validation on user service
        var newUser = new user_model_1.default(user.name, user.username, user.email, user.password);
        return newUser;
    };
    userController.prototype.update = function (id, user) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log("user data for ID " + id + " will be updated !");
    };
    userController.prototype.delete = function (id) {
        //todo remove user
        console.log("user with ID " + id + " will be removed !");
    };
    __decorate([
        routing_controllers_1.Get('/users')
    ], userController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get('/users/:id'),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('id'))
    ], userController.prototype, "getById", null);
    __decorate([
        routing_controllers_1.Get('/users/:username'),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('username'))
    ], userController.prototype, "getByUsername", null);
    __decorate([
        routing_controllers_1.Post('/users'),
        __param(0, routing_controllers_1.Body())
    ], userController.prototype, "add", null);
    __decorate([
        routing_controllers_1.Put('/users/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
    ], userController.prototype, "update", null);
    __decorate([
        routing_controllers_1.Delete('/users/:id'),
        __param(0, routing_controllers_1.Param('id'))
    ], userController.prototype, "delete", null);
    userController = __decorate([
        routing_controllers_1.JsonController()
    ], userController);
    return userController;
}());
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map