"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var LogService = require('../services/log.service');
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.throwError = function (msg, log) {
        if (log && config_1.default.global.saveLogs) {
            LogService.add(log);
        }
        throw new Error("Failed >>> " + msg);
    };
    ErrorHandlerService.prototype.consoleError = function (msg) {
        return console.log(msg);
    };
    return ErrorHandlerService;
}());
module.exports = new ErrorHandlerService();
//# sourceMappingURL=errorHandler.service.js.map