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
let NoteController = NoteController_1 = class NoteController {
    constructor() {
    }
    getAll() {
        return NoteRepository.getAll();
    }
    getById(id) {
        return NoteRepository.getById(id);
    }
    getByUsername(username) {
        return NoteRepository.getByUsername(username);
    }
    add(user) {
        return NoteService.add(user);
    }
    update(id, user) {
        //todo validate input data
        //todo update user data
        console.log(`note data for ID ${id} will be updated !`);
    }
    delete(id) {
        return NoteService.delete(id);
    }
};
NoteController._path = '/notes';
__decorate([
    routing_controllers_1.Get(NoteController_1._path)
], NoteController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get(`${NoteController_1._path}/:id`),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('id'))
], NoteController.prototype, "getById", null);
__decorate([
    routing_controllers_1.Get(`${NoteController_1._path}/:username`),
    routing_controllers_1.OnUndefined(404 /* notFound */),
    __param(0, routing_controllers_1.Param('username'))
], NoteController.prototype, "getByUsername", null);
__decorate([
    routing_controllers_1.Post(NoteController_1._path),
    __param(0, routing_controllers_1.Body())
], NoteController.prototype, "add", null);
__decorate([
    routing_controllers_1.Put(`${NoteController_1._path}/:id`),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
], NoteController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete(`${NoteController_1._path}/:id`),
    __param(0, routing_controllers_1.Param('id'))
], NoteController.prototype, "delete", null);
NoteController = NoteController_1 = __decorate([
    routing_controllers_1.JsonController()
], NoteController);
exports.NoteController = NoteController;
var NoteController_1;
//# sourceMappingURL=note.controller.js.map