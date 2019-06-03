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
var UserRepository = require('../repositories/user.repository');
var UserService = require('../services/user.service');
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController_1 = UserController;
    UserController.prototype.getAll = function () {
        return UserRepository.getAll();
    };
    UserController.prototype.getById = function (id) {
        return UserRepository.getById(id);
    };
    UserController.prototype.getByUsername = function (username) {
        return UserRepository.getByField('username', username);
    };
    UserController.prototype.add = function (user) {
        //todo change any to User
        return UserService.register(user);
    };
    UserController.prototype.update = function (id, user) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log("user data for ID " + id + " will be updated !");
    };
    UserController.prototype.delete = function (id) {
        return UserRepository.delete(id);
    };
    UserController._path = '/users';
    __decorate([
        routing_controllers_1.Get(UserController_1._path)
    ], UserController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get(UserController_1._path + "/:id"),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('id'))
    ], UserController.prototype, "getById", null);
    __decorate([
        routing_controllers_1.Get(UserController_1._path + "/:username"),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('username'))
    ], UserController.prototype, "getByUsername", null);
    __decorate([
        routing_controllers_1.Post(UserController_1._path),
        __param(0, routing_controllers_1.Body())
    ], UserController.prototype, "add", null);
    __decorate([
        routing_controllers_1.Put(UserController_1._path + "/:id"),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
    ], UserController.prototype, "update", null);
    __decorate([
        routing_controllers_1.Delete(UserController_1._path + "/:id"),
        __param(0, routing_controllers_1.Param('id'))
    ], UserController.prototype, "delete", null);
    UserController = UserController_1 = __decorate([
        routing_controllers_1.JsonController()
    ], UserController);
    return UserController;
    var UserController_1;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map