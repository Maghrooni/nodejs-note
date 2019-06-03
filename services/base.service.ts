import {BaseRepository} from "../repositories/base.repository";

let ErrorHandler = require('../services/errorHandler.service');

interface iService {
    repository: BaseRepository,
    errorHandler: object
}

export class BaseService implements iService {

    repository;
    errorHandler;

    constructor() {
        this.errorHandler = ErrorHandler;
    }
}