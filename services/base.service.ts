import {BaseRepository} from "../repositories/base.repository";

const eHandler = require('../services/errorHandler.service');
const logger = require('../services/log.service');

interface iService {
    repository: BaseRepository
}

export class BaseService implements iService {

    repository;
    errorHandler;
    logger;

    constructor() {
        this.errorHandler = new eHandler().getInstance();
        this.logger = new logger().getInstance();
    }
}