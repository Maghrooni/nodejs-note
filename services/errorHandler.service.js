"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
let LogService = require('../services/log.service');
class ErrorHandlerService {
    constructor() {
    }
    throwError(msg, log) {
        if (log && config_1.default.global.saveLogs) {
            LogService.add(log);
        }
        throw new Error(`${msg}`);
    }
    consoleError(msg) {
        return console.log(msg);
    }
}
module.exports = new ErrorHandlerService();
//# sourceMappingURL=errorHandler.service.js.map