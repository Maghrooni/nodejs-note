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
    getAll(response, page, limit) {
        return UserRepository
            .getAll(page, limit)
            .then(docs => {
            return response.send(docs);
        })
            .catch(err => {
            return response.status(500 /* serverError */).send(err);
        });
    }
    getByUsername(username, response) {
        return UserRepository
            .getByUsername(username)
            .then(doc => {
            return response.send(doc);
        })
            .catch(err => {
            return response.status(404 /* notFound */).send({ message: 'user not found' });
        });
    }
    add(user, response) {
        return UserService
            .register(user)
            .then(registered => {
            return response.send(registered);
        })
            .catch(err => {
            return response.status(400 /* validationError */).send({ message: 'registration failed' });
        });
    }
    login(user, request, response) {
        return UserService
            .login(user, request)
            .then(res => {
            return response.send(res);
        })
            .catch(err => {
            return response.status(401 /* unauthorized */).send({ message: 'login failed' });
        });
    }
    update(id, user, response) {
        //todo check if logged in user has permission to update data
        return UserService
            .update(id, user)
            .then(() => {
            return response.send({ message: 'updated' });
        })
            .catch(err => {
            return response.status(400 /* validationError */).send({ message: 'update failed' });
        });
    }
    delete(id) {
        return UserRepository.delete(id);
    }
};
__decorate([
    routing_controllers_1.Get(),
    __param(0, routing_controllers_1.Res()), __param(1, routing_controllers_1.QueryParam("page")), __param(2, routing_controllers_1.QueryParam("limit"))
], UserController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get(`/:username`),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('username')), __param(1, routing_controllers_1.Res())
], UserController.prototype, "getByUsername", null);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body({ required: true })), __param(1, routing_controllers_1.Res())
], UserController.prototype, "add", null);
__decorate([
    routing_controllers_1.Post(`/login`),
    __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Req()), __param(2, routing_controllers_1.Res())
], UserController.prototype, "login", null);
__decorate([
    routing_controllers_1.Put(`/:id`),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()), __param(2, routing_controllers_1.Res())
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