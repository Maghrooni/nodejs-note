import {iLog} from "../models/log.model";
import configs from "../config";

let LogRepository = require('../repositories/log.repository');

class ErrorHandlerService {

    constructor() {
    }

    addLog(log: iLog) {
        LogRepository
            .add(log)
            .then(() => {
                return log;
            })
            .catch(err => {
                this.consoleError('cant save log!');
            })
    }

    throwError(msg: String, log: iLog) {
        if (log && configs.global.saveLogs) {
            this.addLog(log);
        }
        throw new Error(`Failed >>> ${msg}`);
    }

    consoleError(msg: String) {
        return console.log(msg);
    }

}

module.exports = new ErrorHandlerService();