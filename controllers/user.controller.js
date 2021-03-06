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
const logger_middleware_1 = require("../middlewares/logger.middleware");
const base_controller_1 = require("./base.controller");
const user_config_1 = require("../config/user.config");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const UserRepository = require('../repositories/user.repository');
const UserService = require('../services/user.service');
let UserController = class UserController extends base_controller_1.BaseController {
    constructor() {
        super();
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
    getProfile(request, response) {
        return response.send(response.locals.user);
        // return UserService
        //     .getByToken(request.header(userConfigs.auth.header))
        //     .then(doc => {
        //         return response.send(doc);
        //     })
        //     .catch(err => {
        //         return response.status(statusCodes.notFound).send({message: 'user not valid'});
        //     });
    }
    add(user, response) {
        return UserService
            .register(user)
            .then(registered => {
            const token = registered.tokens[0].token;
            ['password', 'tokens', 'notes'].forEach(e => delete registered._doc[e]);
            return response
                .header(user_config_1.default.auth.header, token)
                .send(registered);
        })
            .catch(err => {
            return response.status(400 /* validationError */).send({ message: err.message });
        });
    }
    login(user, request, response) {
        return UserService
            .login(user, request)
            .then(res => {
            const token = res.tokens[0].token;
            ['password', 'tokens', 'notes'].forEach(e => delete res._doc[e]);
            return response
                .header(user_config_1.default.auth.header, token)
                .send(res);
        })
            .catch(err => {
            return response.status(401 /* unauthorized */).send({ message: 'login failed' });
        });
    }
    update(user, response) {
        return UserService
            .update(response.locals.user._id, user)
            .then(() => {
            return response.send({ message: 'updated' });
        })
            .catch(err => {
            return response.status(400 /* validationError */).send({ message: 'update failed' });
        });
    }
    delete(response) {
        //todo deactivate user profile
        return UserRepository.delete(response.locals.user._id);
    }
};
__decorate([
    routing_controllers_1.Get(),
    __param(0, routing_controllers_1.Res()), __param(1, routing_controllers_1.QueryParam("page")), __param(2, routing_controllers_1.QueryParam("limit"))
], UserController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get(`/profile/:username`),
    routing_controllers_1.UseAfter(logger_middleware_1.LoggerMiddleware),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('username')), __param(1, routing_controllers_1.Res())
], UserController.prototype, "getByUsername", null);
__decorate([
    routing_controllers_1.Get(`/profile`),
    routing_controllers_1.UseBefore(auth_middleware_1.AuthMiddleware),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Res())
], UserController.prototype, "getProfile", null);
__decorate([
    routing_controllers_1.Post(),
    routing_controllers_1.UseAfter(logger_middleware_1.LoggerMiddleware),
    __param(0, routing_controllers_1.Body({ required: true })), __param(1, routing_controllers_1.Res())
], UserController.prototype, "add", null);
__decorate([
    routing_controllers_1.Post(`/login`),
    routing_controllers_1.UseAfter(logger_middleware_1.LoggerMiddleware),
    __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Req()), __param(2, routing_controllers_1.Res())
], UserController.prototype, "login", null);
__decorate([
    routing_controllers_1.Put(`/:id`),
    routing_controllers_1.UseAfter(logger_middleware_1.LoggerMiddleware),
    routing_controllers_1.UseBefore(auth_middleware_1.AuthMiddleware),
    __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Res())
], UserController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete(`/:id`),
    routing_controllers_1.UseAfter(logger_middleware_1.LoggerMiddleware),
    routing_controllers_1.UseBefore(auth_middleware_1.AuthMiddleware),
    __param(0, routing_controllers_1.Res())
], UserController.prototype, "delete", null);
UserController = __decorate([
    routing_controllers_1.JsonController('/users')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map