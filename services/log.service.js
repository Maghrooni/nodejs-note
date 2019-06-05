"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let LogRepository = require('../repositories/log.repository');
let Log = require('../models/log.model');
class LogService {
    constructor() {
        this.repository = LogRepository;
    }
    add(log) {
        return this.repository
            .add(log)
            .then(doc => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
}
module.exports = new LogService();
//# sourceMappingURL=log.service.js.map