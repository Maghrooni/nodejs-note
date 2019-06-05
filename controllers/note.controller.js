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
let NoteRepository = require('../repositories/note.repository');
let NoteService = require('../services/note.service');
let NoteController = class NoteController {
    constructor() {
    }
    getAll(response, page, limit) {
        return NoteRepository
            .getAll(page, limit)
            .then((docs) => {
            response.send(docs);
        })
            .catch(err => {
            response.status(500 /* serverError */).send(err);
        });
    }
    getById(id, response) {
        return NoteRepository
            .getById(id)
            .then((doc) => {
            response.send(doc);
        })
            .catch(err => {
            response.status(500 /* serverError */).send(err);
        });
    }
    getByUsername(username, response) {
        return NoteRepository
            .getByUsername(username)
            .then((docs) => {
            response.send(docs);
        })
            .catch(err => {
            response.status(500 /* serverError */).send(err);
        });
    }
    getByTag(tag, response) {
        return NoteRepository
            .getByTag(tag)
            .then((docs) => {
            response.send(docs);
        })
            .catch(err => {
            response.status(500 /* serverError */).send(err);
        });
    }
    add(userId, note, response) {
        return NoteService
            .add(userId, note)
            .then((doc) => {
            response.send(doc);
        })
            .catch(err => {
            response.status(500 /* serverError */).send(err);
        });
    }
    update(id, note, response) {
        return NoteService
            .update(id, note)
            .then(() => {
            return response.send({ message: 'updated' });
        })
            .catch(err => {
            return response.status(400 /* validationError */).send({ message: 'update failed' });
        });
    }
    delete(id) {
        return NoteService.delete(id);
    }
};
__decorate([
    routing_controllers_1.Get(),
    __param(0, routing_controllers_1.Res()), __param(1, routing_controllers_1.QueryParam("page")), __param(2, routing_controllers_1.QueryParam("limit"))
], NoteController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Res())
], NoteController.prototype, "getById", null);
__decorate([
    routing_controllers_1.Get('/:username'),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('username')), __param(1, routing_controllers_1.Res())
], NoteController.prototype, "getByUsername", null);
__decorate([
    routing_controllers_1.Get('/tag/:tag'),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('tag')), __param(1, routing_controllers_1.Res())
], NoteController.prototype, "getByTag", null);
__decorate([
    routing_controllers_1.Post('/:userId'),
    __param(0, routing_controllers_1.Param('userId')), __param(1, routing_controllers_1.Body()), __param(2, routing_controllers_1.Res())
], NoteController.prototype, "add", null);
__decorate([
    routing_controllers_1.Put('/:id'),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()), __param(2, routing_controllers_1.Res())
], NoteController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    __param(0, routing_controllers_1.Param('id'))
], NoteController.prototype, "delete", null);
NoteController = __decorate([
    routing_controllers_1.JsonController('/notes')
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map