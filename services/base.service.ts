import {BaseRepository} from "../repositories/base.repository";
let eHandler = require('../services/errorHandler.service');

interface iService {
    repository: BaseRepository
}

export class BaseService implements iService {

    repository;
    errorHandler;

    constructor() {
        this.errorHandler = new eHandler().getInstance();
    }
}