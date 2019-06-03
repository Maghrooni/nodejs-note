"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var LogRepository = require('../repositories/log.repository');
var LogController = /** @class */ (function () {
    function LogController() {
    }
    LogController.prototype.getAll = function () {
        return LogRepository.getAll();
    };
    __decorate([
        routing_controllers_1.Get()
    ], LogController.prototype, "getAll", null);
    LogController = __decorate([
        routing_controllers_1.JsonController('/logs')
    ], LogController);
    return LogController;
}());
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map