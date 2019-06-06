"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_model_1 = require("../models/log.model");
let LogRepository = require('../repositories/log.repository');
class LogService {
    constructor() {
        this.repository = LogRepository;
    }
    add(log) {
        //todo fix repository not working
        return log_model_1.Log
            .create(log)
            .then((doc) => {
            return doc;
        })
            .catch(err => {
            throw Error(err);
        });
    }
}
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new LogService();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
}
module.exports = Singleton;
//# sourceMappingURL=log.service.js.map