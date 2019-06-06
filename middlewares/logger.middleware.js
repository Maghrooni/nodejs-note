"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let logger = require('../services/log.service');
let logginServ = new logger().getInstance();
class LoggerMiddleware {
    use(request, response, next) {
        logginServ.add({
            title: 'Logger', priority: 2 /* medium */, data: {
                body: response.body,
                request: {
                    host: request.headers.host,
                    url: request.url,
                    method: request.method,
                    query: request.query,
                    params: request.params
                }
            }
        });
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map