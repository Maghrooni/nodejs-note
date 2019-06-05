"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let LogService = require('../services/log.service');
class LoggerMiddleware {
    use(request, response, next) {
        LogService.add({
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