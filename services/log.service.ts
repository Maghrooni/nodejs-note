import {BaseService} from "./base.service";
import {iLog} from "../models/log.model";

let LogRepository = require('../repositories/log.repository');
let ErrorHandler = require('./errorHandler.service');

class LogService {

    repository;

    constructor() {
        this.repository = LogRepository;
    }

    add(log: iLog) {
        return this.repository
            .add(log)
            .then((doc) => {
                return doc;
            })
            .catch(err => {
                throw Error(err);
            });
    }
}

module.exports = new LogService();