const eHandler = require('../services/errorHandler.service');

interface iRepository {

}

export class BaseRepository implements iRepository {

    protected errorHandler;

    constructor() {
        this.errorHandler = new eHandler().getInstance();
    }
}