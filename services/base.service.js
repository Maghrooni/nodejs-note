"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ErrorHandler = require('../services/errorHandler.service');
class BaseService {
    constructor() {
        this.errorHandler = ErrorHandler;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map