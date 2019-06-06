"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eHandler = require('../services/errorHandler.service');
class BaseRepository {
    constructor() {
        this.errorHandler = new eHandler().getInstance();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map