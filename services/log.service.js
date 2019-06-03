"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogRepository = require('../repositories/log.repository');
var ErrorHandler = require('./errorHandler.service');
var LogService = /** @class */ (function () {
    function LogService() {
        this.repository = LogRepository;
    }
    LogService.prototype.add = function (log) {
        return this.repository
            .add(log)
            .then(function () {
            return log;
        })
            .catch(function (err) {
            return ErrorHandler.consoleError(err);
        });
    };
    return LogService;
}());
module.exports = new LogService();
//# sourceMappingURL=log.service.js.map