"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let LogRepository = require('../repositories/log.repository');
let ErrorHandler = require('./errorHandler.service');
class LogService {
    constructor() {
        this.repository = LogRepository;
    }
    add(log) {
        return this.repository
            .add(log)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            return ErrorHandler.consoleError(err);
        });
    }
}
module.exports = new LogService();
//# sourceMappingURL=log.service.js.map