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
var NoteRepository = require('../repositories/note.repository');
var NoteService = require('../services/note.service');
var NoteController = /** @class */ (function () {
    function NoteController() {
    }
    NoteController_1 = NoteController;
    NoteController.prototype.getAll = function () {
        return NoteRepository.getAll();
    };
    NoteController.prototype.getById = function (id) {
        return NoteRepository.getById(id);
    };
    NoteController.prototype.getByUsername = function (username) {
        return NoteRepository.getByUsername(username);
    };
    NoteController.prototype.add = function (user) {
        return NoteService.add(user);
    };
    NoteController.prototype.update = function (id, user) {
        //todo validate input data
        //todo update user data
        console.log("note data for ID " + id + " will be updated !");
    };
    NoteController.prototype.delete = function (id) {
        return NoteService.delete(id);
    };
    NoteController._path = '/notes';
    __decorate([
        routing_controllers_1.Get(NoteController_1._path)
    ], NoteController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get(NoteController_1._path + "/:id"),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('id'))
    ], NoteController.prototype, "getById", null);
    __decorate([
        routing_controllers_1.Get(NoteController_1._path + "/:username"),
        routing_controllers_1.OnUndefined(404 /* notFound */),
        __param(0, routing_controllers_1.Param('username'))
    ], NoteController.prototype, "getByUsername", null);
    __decorate([
        routing_controllers_1.Post(NoteController_1._path),
        __param(0, routing_controllers_1.Body())
    ], NoteController.prototype, "add", null);
    __decorate([
        routing_controllers_1.Put(NoteController_1._path + "/:id"),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
    ], NoteController.prototype, "update", null);
    __decorate([
        routing_controllers_1.Delete(NoteController_1._path + "/:id"),
        __param(0, routing_controllers_1.Param('id'))
    ], NoteController.prototype, "delete", null);
    NoteController = NoteController_1 = __decorate([
        routing_controllers_1.JsonController()
    ], NoteController);
    return NoteController;
    var NoteController_1;
}());
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map