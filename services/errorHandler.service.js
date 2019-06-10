"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
let LogService = require('../services/log.service');
class ErrorHandlerService {
    constructor() {
    }
    throwError(msg, log, isPromise = true) {
        if (log && config_1.default.global.saveLogs) {
            LogService.add(log);
        }
        if (config_1.isDevEnv()) {
            // console.log();
            console.trace(`\n#########\n ${msg} \n########\n`);
        }
        if (isPromise) {
            return Promise.reject(msg);
        }
        throw new Error(msg);
    }
    consoleError(msg) {
        return console.log(msg);
    }
}
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new ErrorHandlerService();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
}
module.exports = Singleton;
//# sourceMappingURL=errorHandler.service.js.map