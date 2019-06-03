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
const routing_controllers_1 = require("routing-controllers");
let UserRepository = require('../repositories/user.repository');
let UserService = require('../services/user.service');
let UserController = class UserController {
    constructor() {
    }
    getAll() {
        return UserRepository.getAll();
    }
    getById(id) {
        return UserRepository.getById(id);
    }
    getByUsername(username) {
        return UserRepository.getByField('username', username);
    }
    add(user) {
        //todo change any to User
        return UserService.register(user);
    }
    login(user) {
        //todo change any to User
        return UserService.login(user);
    }
    update(id, user) {
        //todo find user by Id , validate input data
        //todo check if logged in user has permission to update data
        //todo update user data
        console.log(`user data for ID ${id} will be updated !`);
    }
    delete(id) {
        return UserRepository.delete(id);
    }
};
__decorate([
    routing_controllers_1.Get()
], UserController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('id'))
], UserController.prototype, "getById", null);
__decorate([
    routing_controllers_1.Get(`/:username`),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('username'))
], UserController.prototype, "getByUsername", null);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body())
], UserController.prototype, "add", null);
__decorate([
    routing_controllers_1.Post(`/login`),
    __param(0, routing_controllers_1.Body())
], UserController.prototype, "login", null);
__decorate([
    routing_controllers_1.Put(`/:id`),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
], UserController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete(`/:id`),
    __param(0, routing_controllers_1.Param('id'))
], UserController.prototype, "delete", null);
UserController = __decorate([
    routing_controllers_1.JsonController('/users')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map