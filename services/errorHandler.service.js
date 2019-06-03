"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var LogRepository = require('../repositories/log.repository');
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.addLog = function (log) {
        var _this = this;
        LogRepository
            .add(log)
            .then(function () {
            return log;
        })
            .catch(function (err) {
            _this.consoleError('cant save log!');
        });
    };
    ErrorHandlerService.prototype.throwError = function (msg, log) {
        if (log && config_1.default.global.saveLogs) {
            this.addLog(log);
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