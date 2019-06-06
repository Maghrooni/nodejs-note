"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eHandler = require('../services/errorHandler.service');
const logger = require('../services/log.service');
class BaseService {
    constructor() {
        this.errorHandler = new eHandler().getInstance();
        this.logger = new logger().getInstance();
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map