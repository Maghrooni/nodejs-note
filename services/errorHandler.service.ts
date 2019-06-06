import {iLog} from "../models/log.model";
import configs, {isDevEnv} from "../config";

let LogService = require('../services/log.service');

class ErrorHandlerService {

    constructor() {
    }

    throwError(msg: string, log: iLog) {
        if (log && configs.global.saveLogs) {
            LogService.add(log);
        }
        if (isDevEnv()) {
            // console.log();
            console.trace(`\n#########\n ${msg} \n########\n`);
        }
        throw new Error(`${msg}`);
    }

    consoleError(msg: string) {
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