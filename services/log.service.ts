import {BaseService} from "./base.service";
import {iLog, Log} from '../models/log.model'

let LogRepository = require('../repositories/log.repository');

class LogService {

    repository;

    constructor() {
        this.repository = LogRepository;
    }

    add(log: iLog) {
        //todo fix repository not working
        return Log
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