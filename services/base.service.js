"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let eHandler = require('../services/errorHandler.service');
let logger = require('../services/log.service');
class BaseService {
    constructor() {
        this.errorHandler = new eHandler().getInstance();
        this.logger = new logger().getInstance();
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map