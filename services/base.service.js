"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let eHandler = require('../services/errorHandler.service');
class BaseService {
    constructor() {
        this.errorHandler = new eHandler().getInstance();
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map