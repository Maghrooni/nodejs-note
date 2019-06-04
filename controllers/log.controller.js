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
let LogRepository = require('../repositories/log.repository');
let LogController = class LogController {
    constructor() {
    }
    getAll(response) {
        return LogRepository
            .getAll()
            .then((docs) => {
            response.send(docs);
        })
            .catch(err => {
            response.status(500 /* serverError */).send(err);
        });
    }
};
__decorate([
    routing_controllers_1.Get(),
    __param(0, routing_controllers_1.Res())
], LogController.prototype, "getAll", null);
LogController = __decorate([
    routing_controllers_1.JsonController('/logs')
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map