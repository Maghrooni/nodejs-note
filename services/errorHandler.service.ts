import {iLog} from "../models/log.model";
import configs from "../config";

let LogService = require('../services/log.service');

class ErrorHandlerService {

    constructor() {
    }

    throwError(msg: string, log: iLog) {
        if (log && configs.global.saveLogs) {
            LogService.add(log);
        }
        throw new Error(`${msg}`);
    }

    consoleError(msg: string) {
        return console.log(msg);
    }

}

module.exports = new ErrorHandlerService();