"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let eHandler = require('../services/errorHandler.service');
class BaseRepository {
    constructor() {
        this.errorHandler = new eHandler().getInstance();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map